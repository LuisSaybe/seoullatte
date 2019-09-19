import React from 'react';
import PropTypes from  'prop-types';

import './style.scss';

export function Utterance({ className, text }) {
  const onClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = speechSynthesis
      .getVoices()
      .find(voice => voice.lang.includes('ko'));

    if (voice) {
      utterance.rate = 0.1;
      utterance.voice = voice;
      utterance.lang = voice.lang;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <button className={className} onClick={onClick} styleName='root'>
        {text}
    </button>
  );
}

Utterance.propTypes = {
  className:  PropTypes.string,
  text: PropTypes.string.isRequired,
};
