import React from "react";

import { useKoreanUtterance } from "web/js/hook/useKoreanUtterance";
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
  const utterance = useKoreanUtterance(text);

  if (speechSynthesis) {
    const onClick = () => {
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
