const NETLIFY_IMAGE_ENDPOINT = "/.netlify/images";

export const RESPONSIVE_WIDTHS = [400, 800, 1200];

export function netlifyImageUrl(
  src: string,
  width: number,
  quality = 80,
  format = "avif",
) {
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    fm: format,
    q: String(quality),
  });
  return `${NETLIFY_IMAGE_ENDPOINT}?${params.toString()}`;
}

export function netlifyImageSrcSet(
  src: string,
  widths: number[] = RESPONSIVE_WIDTHS,
  quality = 80,
  format = "avif",
) {
  return widths
    .map((w) => `${netlifyImageUrl(src, w, quality, format)} ${w}w`)
    .join(", ");
}
