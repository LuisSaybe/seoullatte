import { SpeechSynthesisSettings } from "./speech-synthesis";

export interface UserInterface {
  language?: string;
  burgerMenuOpen: boolean;
  speechSynthesisSettings?: SpeechSynthesisSettings;
}
