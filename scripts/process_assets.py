"""Rename + downsize new logos/backgrounds + generate buildings-only cutout."""
import shutil
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

PUB = Path(__file__).parent.parent / "public" / "images"
LOGOS = PUB / "logos"
BG = PUB / "backgrounds"

# --- 1. Rename / save logo files to URL-safe names ---------------------------
logo_renames = {
    "Landscape White Text (4).png": "landscape-white.png",
    "long 180dc name, green text, short branch name  - Copy.png": "sphere-green.png",
    "short 180dc name, white text, short branch name  (3).png": "stacked-white.png",
}
for src, dst in logo_renames.items():
    s = LOGOS / src
    d = LOGOS / dst
    if s.exists():
        shutil.copy2(s, d)
        print(f"copied {src} -> {dst}")

# --- 2. Downsize + rename background photos ----------------------------------
bg_renames = {
    "53182029677_decf0f0a68_o.jpg": "minskoff-atrium.jpg",       # students on stairs
    "53121765803_e4203e795b_o.jpg": "donor-wall-close.jpg",
    "53121765808_103e06e7ef_o.jpg": "donor-wall.jpg",
    "53182028917_d5dded44e3_o.jpg": "minskoff-hallway.jpg",
}
for src, dst in bg_renames.items():
    s = BG / src
    if not s.exists():
        continue
    img = Image.open(s).convert("RGB")
    img.thumbnail((2400, 2400), Image.LANCZOS)
    img.save(BG / dst, "JPEG", quality=82, optimize=True)
    print(f"resized {src} -> {dst} ({img.size[0]}x{img.size[1]})")

# --- 3. Generate buildings-only cutout ---------------------------------------
# Sky transparent, trees/grass transparent, only "buildings" opaque.
# Then layered above the sphere, only buildings occlude it.
src_jpg = BG / "campus-hero.jpg"
img = Image.open(src_jpg).convert("RGB")
img.thumbnail((2880, 2880), Image.LANCZOS)
arr = np.array(img)
h, w = arr.shape[:2]
r = arr[:, :, 0].astype(int)
g = arr[:, :, 1].astype(int)
b = arr[:, :, 2].astype(int)
brightness = (r + g + b) / 3

# Sky: bright, OR blue-dominant
is_sky = (brightness > 178) | ((b > r + 5) & (b > g - 20) & (brightness > 120))

# Green (trees & grass): green channel dominant
is_green = (g > r + 6) & (g > b - 8) & (g > 55)

# Wider band so the sphere has more building to be occluded by, but still
# excluding distant foreground concrete/shadows.
ys = np.arange(h).reshape(-1, 1)
in_band = (ys >= int(h * 0.28)) & (ys <= int(h * 0.70))

is_building = ~is_sky & ~is_green & in_band

# Morphological close to fill small gaps inside building areas (window
# reflections classified as sky, branches misclassified as green, etc.)
from scipy.ndimage import binary_closing, binary_opening
is_building = binary_closing(is_building, iterations=2)
is_building = binary_opening(is_building, iterations=1)

alpha = np.where(is_building, 255, 0).astype(np.uint8)
# Very subtle feather — sharp edges feel more like a real photo cutout.
alpha = np.array(
    Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.3))
)

rgba = np.dstack([arr, alpha])
out_png = BG / "campus-hero-buildings.png"
out_webp = BG / "campus-hero-buildings.webp"
Image.fromarray(rgba, "RGBA").save(out_png, optimize=True)
Image.fromarray(rgba, "RGBA").save(out_webp, "WEBP", quality=90, method=6)

mb_png = out_png.stat().st_size / 1024 / 1024
mb_webp = out_webp.stat().st_size / 1024 / 1024
print(f"wrote campus-hero-buildings.png ({mb_png:.2f} MB) + .webp ({mb_webp:.2f} MB)")
