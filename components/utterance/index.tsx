import React, { useEffect } from "react";

import { useKoreanUtterance } from "../../lib/hook/useKoreanUtterance";
import { useUtterance } from "../../lib/hook/useUtterance";
import styles from "./index.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  voice?: SpeechSynthesisVoice;
}

export function Utterance(props: Props) {
  const { text, voice, className, ...rest } = props;
  const utterance = useUtterance(text, voice?.voiceURI);
  const koreanUtterance = useKoreanUtterance(text);
  const [speechSynthesis, setSpeechSynthesis] = React.useState(null);

  useEffect(() => {
    setSpeechSynthesis(window.speechSynthesis);
  }, []);

  if (speechSynthesis) {
    const onClick = () => {
      if (voice) {
        if (utterance) {
          speechSynthesis.speak(utterance);
        }
      } else if (koreanUtterance) {
        speechSynthesis.speak(koreanUtterance);
      }
    };

    return (
      <button
        {...rest}
        className={`${styles.root} ${className ?? ""}`}
        onClick={onClick}
      />
    );
  }

  return <span {...rest} className={`${styles.root} ${className ?? ""}`} />;
}
