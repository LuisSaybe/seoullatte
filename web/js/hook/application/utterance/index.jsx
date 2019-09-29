import React, { useContext } from 'react';
import PropTypes from  'prop-types';

import {
  SpeechSynthesisSettingsContext
} from 'web/js/context';

import './style.scss';

export function Utterance({ text, children, className }) {
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  const voices = speechSynthesisSettings.voices || [];
  const voice = voices.find(({ voiceURI }) => speechSynthesisSettings.voiceURI === voiceURI);

  if (voice) {
    const onClick = () => {
      const utterance = new SpeechSynthesisUtterance(typeof text === 'undefined' ? children : text);
      utterance.voice = voice;
      utterance.lang = voice.lang;

      if (typeof speechSynthesisSettings.rate !== 'undefined') {
        utterance.rate = speechSynthesisSettings.rate;
      }

      speechSynthesis.speak(utterance);
    };

    return (
      <button className={className} onClick={onClick} styleName='root'>
          {children}
      </button>
    );
  }

  return (<span styleName='root'>{children}</span>);
}

Utterance.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  className:  PropTypes.string,
};
