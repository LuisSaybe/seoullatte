import PropTypes from "prop-types";
import React, { useContext } from "react";

import { SpeechSynthesisSettingsContext } from "web/js/context";

import "./style.scss";

interface IIinterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  styleName?: string;
  text?: string;
  children: string;
  voice?: SpeechSynthesisVoice;
}

export function Utterance(props: IIinterface) {
  const { children, text, className } = props;
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
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
