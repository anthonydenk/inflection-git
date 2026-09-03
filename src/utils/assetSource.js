export function assetSrc(asset) {
  if (!asset) return "";
  return typeof asset === "string" ? asset : asset.src;
}
