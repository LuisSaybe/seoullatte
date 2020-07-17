import { SpeechSynthesisSettings } from "web/js/interface/speech-synthesis";

export interface UserInterface {
  language?: string;
  returnTo: string;
  burgerMenuOpen: boolean;
  speechSynthesisSettings?: SpeechSynthesisSettings;
}
