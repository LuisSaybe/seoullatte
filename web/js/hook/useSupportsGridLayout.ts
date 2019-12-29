export function useSupportsGridLayout() {
  const div = document.createElement("div");
  return typeof div.style.grid === "string";
}
