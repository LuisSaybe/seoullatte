import { PrefersColorSchemeSetting } from "../interface/user-interface";

export function getPrefersColorScheme() {
  const isDarkMode =
    window.matchMedia("(prefers-color-scheme: dark)").matches === true;
  const isLightMode =
    window.matchMedia("(prefers-color-scheme: light)").matches === true;

  if (isDarkMode) {
    return PrefersColorSchemeSetting.dark;
  }

  if (isLightMode) {
    return PrefersColorSchemeSetting.light;
  }

  return null;
}
