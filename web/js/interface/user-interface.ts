import { SpeechSynthesisSettings } from "web/js/interface/speech-synthesis";

export interface UserInterface {
  language: string;
  burgerMenuOpen: boolean;
  speechSynthesisSettings?: SpeechSynthesisSettings;
}
