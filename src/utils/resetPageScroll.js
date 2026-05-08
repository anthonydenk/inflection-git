export function resetPageScroll() {
  document.documentElement.style.removeProperty("height");
  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("overflow-y");
  document.documentElement.style.removeProperty("position");
  document.body.style.removeProperty("height");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("overflow-y");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("top");
  document.body.style.removeProperty("left");
  document.body.style.removeProperty("right");
  document.body.style.removeProperty("bottom");
  document.body.style.removeProperty("width");
  window.scrollTo(0, 0);
}
