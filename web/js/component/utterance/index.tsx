import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "web/js/redux/reducer";
import "./style.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  styleName?: string;
  text?: string;
  children: string;
  voice?: SpeechSynthesisVoice;
}

export function Utterance(props: Props) {
  const { children, text, className } = props;
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );
  const voice = speechSynthesisSettings?.voices?.find(
    ({ voiceURI }) => speechSynthesisSettings.voiceURI === voiceURI,
  );
  const utteranceVoice = props.voice || voice;

  if (utteranceVoice) {
    const onClick = () => {
      const utterance = new SpeechSynthesisUtterance(
        typeof text === "undefined" ? children : text,
      );
      utterance.voice = utteranceVoice;

      if (typeof speechSynthesisSettings.rate !== "undefined") {
        utterance.rate = speechSynthesisSettings.rate;
      }

      speechSynthesis.speak(utterance);
    };

    return (
      <button className={className} onClick={onClick} styleName="root">
        {children}
      </button>
    );
  }

  return <span styleName="root">{children}</span>;
}
