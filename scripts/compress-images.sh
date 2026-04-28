#!/usr/bin/env bash
# Batch-compress all referenced images via ffmpeg.
# Photos go to JPG @ quality 4 (≈85), PNG with alpha gets resized in-place.
# Source-of-truth references in src/ are rewritten to the new extensions.
set -euo pipefail

cd "$(dirname "$0")/.."

PUB=public/images
TMP=".compress-tmp"
mkdir -p "$TMP"

# log helper
log() { printf '  %s\n' "$1"; }

# Resize+recompress a JPG in place: max 2400px wide, quality 4 (~85).
recompress_jpg() {
  local f="$1" max="${2:-2400}" q="${3:-4}"
  local before after
  before=$(stat -c %s "$f")
  ffmpeg -y -loglevel error -i "$f" \
    -vf "scale='min($max,iw)':-1" -q:v "$q" \
    "$TMP/out.jpg"
  mv "$TMP/out.jpg" "$f"
  after=$(stat -c %s "$f")
  log "$f: $before → $after"
}

# Convert a photo PNG (no alpha needed) to JPG and remove the PNG. Returns
# the new path on stdout so callers can update references.
png_to_jpg() {
  local f="$1" max="${2:-2400}" q="${3:-4}"
  local out="${f%.png}.jpg"
  local before
  before=$(stat -c %s "$f")
  ffmpeg -y -loglevel error -i "$f" \
    -vf "scale='min($max,iw)':-1" -q:v "$q" \
    "$out"
  rm -f "$f"
  local after
  after=$(stat -c %s "$out")
  log "$f → $out: $before → $after"
  printf '%s' "$out"
}

# Resize a PNG with alpha in place (lossless format, so we just shrink dims
# and let palette compression do its thing).
recompress_png_alpha() {
  local f="$1" max="${2:-1920}"
  local before after
  before=$(stat -c %s "$f")
  ffmpeg -y -loglevel error -i "$f" \
    -vf "scale='min($max,iw)':-1" \
    "$TMP/out.png"
  mv "$TMP/out.png" "$f"
  after=$(stat -c %s "$f")
  log "$f: $before → $after"
}

echo "[1/4] Hero PNGs → JPG (no transparency needed for the building, keep alpha for the logo glow)"
# Building hero photo: convert PNG → JPG, this is the 54 MB monster.
new=$(png_to_jpg "$PUB/backgrounds/Hero 1 GLow.png" 2400 4)
HERO_BUILDING_NEW="$new"
# Logo glow has alpha, just resize PNG.
recompress_png_alpha "$PUB/backgrounds/Hero 1 Glow Logo.png" 1920

echo "[2/4] Event photos (used in arc gallery + award)"
for f in \
  "$PUB/events/gala2026.jpg" \
  "$PUB/events/retreat.JPG" \
  "$PUB/events/st-jude-basketball.jpg" \
  "$PUB/events/chicago.jpeg" \
  "$PUB/events/eboardbanquet.JPG" \
  "$PUB/events/bcg.jpeg" \
  "$PUB/events/bidnight.jpeg" \
  "$PUB/events/banquet.jpeg" \
  "$PUB/events/mmm.jpeg" \
  "$PUB/events/Chicago trip - social.JPEG" \
  "$PUB/events/E-Board Photo.JPEG" \
  "$PUB/events/Social party.JPEG" \
  "$PUB/events/Spring 2026 BA Class.JPEG" \
  "$PUB/events/Women in 180.JPEG" \
  ; do
  if [ -f "$f" ]; then recompress_jpg "$f" 2000 4; fi
done

echo "[3/4] Team headshots (PNG → resize in place; smaller cap since they render at <500px)"
for f in "$PUB"/team/eboard-headshots/*.png; do
  if [ -f "$f" ]; then recompress_png_alpha "$f" 1200; fi
done

echo "[4/4] Background JPGs (donor-wall, minskoff)"
for f in \
  "$PUB/backgrounds/donor-wall.jpg" \
  "$PUB/backgrounds/donor-wall-close.jpg" \
  "$PUB/backgrounds/minskoff.jpg" \
  ; do
  if [ -f "$f" ]; then recompress_jpg "$f" 2400 4; fi
done

rm -rf "$TMP"

echo
echo "Done. Update Home.js reference for the building: $HERO_BUILDING_NEW"
