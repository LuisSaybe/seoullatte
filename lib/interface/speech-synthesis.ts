export interface SpeechSynthesisSettings {
  voices: SpeechSynthesisVoice[];
  voiceURI?: SpeechSynthesisVoice["voiceURI"];
  rate?: SpeechSynthesisUtterance["rate"];
}

export const DEFAULT_SPEAKING_RATE = -1;
