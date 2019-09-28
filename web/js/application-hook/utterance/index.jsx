import React from 'react';
import PropTypes from  'prop-types';

import './style.scss';

export function Utterance({ text, children, className }) {
  const onClick = () => {
    const utterance = new SpeechSynthesisUtterance(typeof text === 'undefined' ? children : text);
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
        {children}
    </button>
  );
}

Utterance.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  className:  PropTypes.string,
};
