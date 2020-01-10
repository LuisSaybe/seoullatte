import { Operation } from "web/js/interface/reducer";

export type SpeechSynthesisSettingsContextType = ISpeechSynthesisSettings;

export interface IDispatchSpeechSynthesisAction {
  type: Operation;
  data: ISpeechSynthesisSettings;
}

export interface ISpeechSynthesisDispatchAction {
  data: Partial<ISpeechSynthesisSettings>;
  type: Operation;
}

export type DispatchSpeechSynthesisSettingsContextType = (
  action: ISpeechSynthesisDispatchAction,
) => void;

export type DispatchSpeechSynthesisSettingsContext = (
  action: IDispatchSpeechSynthesisAction,
) => void;

export interface ISpeechSynthesisSettings {
  voices: SpeechSynthesisVoice[];
  voiceURI?: SpeechSynthesisVoice["voiceURI"];
  rate?: SpeechSynthesisUtterance["rate"];
}
