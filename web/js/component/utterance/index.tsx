import React from "react";

import { useKoreanUtterance } from "web/js/hook/useKoreanUtterance";
import { useUtterance } from "web/js/hook/useUtterance";
import "./style.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children: string;
  voice?: SpeechSynthesisVoice;
}

export function Utterance(props: Props) {
  const { children, text, voice, className } = props;
  const utterance = useUtterance(text, voice?.voiceURI);
  const koreanUtterance = useKoreanUtterance(text);

  if (window.speechSynthesis) {
    const onClick = () => {
      if (voice) {
        if (utterance) {
          window.speechSynthesis.speak(utterance);
        }
      } else if (koreanUtterance) {
        window.speechSynthesis.speak(koreanUtterance);
      }
    };

    return (
      <button className={className} onClick={onClick} styleName="root">
        {children}
      </button>
    );
  }

  return <span styleName="root">{children}</span>;
}
