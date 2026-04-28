"""Build a single composited hero image: base campus photo + sphere logo
with the buildings naturally occluding the lower portion of the sphere.

Output: public/images/backgrounds/campus-hero-composed.jpg (~3:2, 2880w)
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from scipy.ndimage import binary_closing, binary_opening

ROOT = Path(__file__).parent.parent
BG_DIR = ROOT / "public" / "images" / "backgrounds"
LOGO = ROOT / "src" / "assets" / "180_degrees_consulting_logo.png"

TARGET_W = 2880
TARGET_H = 1920  # 3:2

# ---- 1. Load and crop the base photo to 3:2 ----
bg = Image.open(BG_DIR / "campus-hero.jpg").convert("RGBA")
bg_aspect = bg.width / bg.height
target_aspect = TARGET_W / TARGET_H
if bg_aspect > target_aspect:
    new_h = TARGET_H
    new_w = int(bg.width * (TARGET_H / bg.height))
    bg = bg.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - TARGET_W) // 2
    bg = bg.crop((left, 0, left + TARGET_W, TARGET_H))
else:
    new_w = TARGET_W
    new_h = int(bg.height * (TARGET_W / bg.width))
    bg = bg.resize((new_w, new_h), Image.LANCZOS)
    top = (new_h - TARGET_H) // 2
    bg = bg.crop((0, top, TARGET_W, top + TARGET_H))

# ---- 2. Load + size + position the sphere ----
sphere = Image.open(LOGO).convert("RGBA")
# match mockup proportion: sphere left edge ~58%, right edge bleeds ~3%
sphere_w = int(TARGET_W * 0.46)
sphere_h = int(sphere.height * (sphere_w / sphere.width))
sphere = sphere.resize((sphere_w, sphere_h), Image.LANCZOS)
x = int(TARGET_W * 0.58)
y = int(TARGET_H * -0.05)

# ---- 3. Composite bg + sphere ----
canvas = bg.copy()
canvas.alpha_composite(sphere, (x, y))

# ---- 4. Build buildings cutout from the resized bg so alignment is perfect ----
arr = np.array(bg.convert("RGB"))
r = arr[:, :, 0].astype(int)
g = arr[:, :, 1].astype(int)
b = arr[:, :, 2].astype(int)
brightness = (r + g + b) / 3
is_sky = (brightness > 178) | ((b > r + 5) & (b > g - 20) & (brightness > 120))
is_green = (g > r + 6) & (g > b - 8) & (g > 55)
ys = np.arange(TARGET_H).reshape(-1, 1)
in_band = (ys >= int(TARGET_H * 0.28)) & (ys <= int(TARGET_H * 0.72))
is_building = ~is_sky & ~is_green & in_band

is_building = binary_closing(is_building, iterations=2)
is_building = binary_opening(is_building, iterations=1)

alpha = np.where(is_building, 255, 0).astype(np.uint8)
alpha = np.array(Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.4)))

buildings_rgba = np.dstack([arr, alpha])
buildings = Image.fromarray(buildings_rgba, "RGBA")

# ---- 5. Buildings on top so they occlude the lower sphere ----
canvas.alpha_composite(buildings)

# ---- 6. Save ----
out = BG_DIR / "campus-hero-composed.jpg"
canvas.convert("RGB").save(out, "JPEG", quality=86, optimize=True, progressive=True)
print(f"wrote {out.name} ({canvas.size[0]}x{canvas.size[1]}, {out.stat().st_size/1024/1024:.2f} MB)")
