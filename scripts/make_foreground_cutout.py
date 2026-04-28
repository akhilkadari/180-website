"""
Generate a foreground cutout from the campus hero photo by detecting the
sky/skyline boundary column-by-column. Output is a PNG with the sky
transparent and everything from the skyline down opaque, so it can be
layered on top of the sphere logo to create a "logo behind the buildings"
effect.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).parent.parent
SRC = ROOT / "public" / "campus-hero.jpg"
OUT = ROOT / "public" / "campus-hero-foreground.png"

# Downscale target width for the cutout — keeps file size sane while still
# being sharp on retina screens.
TARGET_WIDTH = 2880
BRIGHTNESS_THRESHOLD = 175  # below this in a column = "skyline reached"
FEATHER_RADIUS = 3
SKY_RUN_REQUIRED = 4         # need this many sky-bright pixels in a row at the
                             # top before we trust the column has a sky region

img = Image.open(SRC).convert("RGB")
ratio = TARGET_WIDTH / img.width
new_size = (TARGET_WIDTH, int(img.height * ratio))
img = img.resize(new_size, Image.LANCZOS)
arr = np.array(img)
h, w = arr.shape[:2]

# Brightness map (uint16 to avoid overflow when summing channels).
brightness = arr.astype(np.uint16).sum(axis=2) // 3

# Walk each column top-to-bottom. After we have seen SKY_RUN_REQUIRED bright
# pixels in a row (confirms we are in actual sky), the first dark pixel ends
# the sky region. If a column never has that many bright pixels at the top,
# treat it as fully foreground (no cutout).
boundary = np.full(w, h, dtype=np.int32)
for x in range(w):
    col = brightness[:, x]
    bright = col >= BRIGHTNESS_THRESHOLD
    # confirm sky exists by checking a top streak
    if bright[:SKY_RUN_REQUIRED].sum() < SKY_RUN_REQUIRED:
        boundary[x] = 0  # no sky here -> entire column is foreground
        continue
    # find first dark pixel
    dark_idx = np.where(~bright)[0]
    if len(dark_idx) == 0:
        boundary[x] = h  # entire column is sky -> fully transparent
    else:
        boundary[x] = int(dark_idx[0])

# Smooth the boundary so it doesn't look jagged where individual columns
# disagree (window reflections, branches, etc.).
window = 25
kernel = np.ones(window) / window
smoothed = np.convolve(boundary, kernel, mode="same").astype(np.int32)

# Build alpha mask.
alpha = np.zeros((h, w), dtype=np.uint8)
ys = np.arange(h).reshape(-1, 1)
mask = ys >= smoothed.reshape(1, -1)
alpha[mask] = 255

# Feather the edge so it transitions softly into the sphere behind it.
alpha_img = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(FEATHER_RADIUS))
alpha = np.array(alpha_img)

rgba = np.dstack([arr, alpha])
Image.fromarray(rgba, "RGBA").save(OUT, optimize=True)

size_mb = OUT.stat().st_size / 1024 / 1024
print(f"wrote {OUT.name} ({new_size[0]}x{new_size[1]}, {size_mb:.2f} MB)")
