import PropTypes from "prop-types";
import React, { ReactNode, useContext } from "react";

import { SpeechSynthesisSettingsContext } from "web/js/context";
import { ISpeechSynthesisSettings } from "web/js/interface";

import "./style.scss";

interface IIinterface {
  className?: string;
  styleName?: string;
  text?: string;
  children: string;
}

export function Utterance(
  props: IIinterface & React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { children, text, className } = props;
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  const voices = speechSynthesisSettings.voices || [];
  const voice = voices.find(
    ({ voiceURI }) => speechSynthesisSettings.voiceURI === voiceURI,
  );

  if (voice) {
    const onClick = () => {
      const utterance = new SpeechSynthesisUtterance(
        typeof text === "undefined" ? children : text,
      );
      utterance.voice = voice;
      utterance.lang = voice.lang;

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

Utterance.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
