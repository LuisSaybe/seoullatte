import { SpeechSynthesisSettings } from "web/js/interface/speech-synthesis";

export enum PrefersColorSchemeSetting {
  light = "light-color-scheme-root",
  dark = "dark-color-scheme-root",
}

export interface UserInterface {
  language: string;
  burgerMenuOpen: boolean;
  prefersColorScheme: PrefersColorSchemeSetting;
  speechSynthesisSettings?: SpeechSynthesisSettings;
}
