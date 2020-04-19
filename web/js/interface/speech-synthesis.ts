export interface SpeechSynthesisSettings {
  voices: SpeechSynthesisVoice[];
  voiceURI?: SpeechSynthesisVoice["voiceURI"];
  rate?: SpeechSynthesisUtterance["rate"];
}
