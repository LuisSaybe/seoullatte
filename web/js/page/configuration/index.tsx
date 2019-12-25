import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Language } from "common/model";

import {
  DispatchSpeechSynthesisSettingsContext,
  SpeechSynthesisSettingsContext,
} from "web/js/context";

import { SpeechSynthesisDispatchType } from "web/js/interface";
import { routes } from "web/js/routes";

import { TopicRoute } from "common/routes";
import { Anchor } from "web/js/component/anchor";
import { Button } from "web/js/component/button";
import "./style.scss";

export function Configuration() {
  const DEFAULT_SPEAKING_RATE = -1;
  const history = useHistory();
  const { t } = useTranslation();
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  const [rate, setRate] = useState(
    speechSynthesisSettings.rate
      ? speechSynthesisSettings.rate
      : DEFAULT_SPEAKING_RATE,
  );
  const [voiceURI, setVoiceURI] = useState(
    speechSynthesisSettings.voiceURI ? speechSynthesisSettings.voiceURI : null,
  );

  const onChange = (e) => setRate(Number(e.target.value));
  const onVoiceURIChange = (e) => setVoiceURI(e.target.value);
  const dispatchspeechSynthesisSettings = useContext(
    DispatchSpeechSynthesisSettingsContext,
  );
  const onSubmit = (e) => {
    e.preventDefault();
    const data = { ...speechSynthesisSettings };

    if (voiceURI) {
      data.voiceURI = voiceURI;
    }

    if (rate === DEFAULT_SPEAKING_RATE) {
      delete data.rate;
    } else {
      data.rate = rate;
    }

    dispatchspeechSynthesisSettings({
      data,
      type: SpeechSynthesisDispatchType.MERGE,
    });
  };

  useEffect(() => {
    if (speechSynthesisSettings.voiceURI) {
      setVoiceURI(speechSynthesisSettings.voiceURI);
    }
  }, [speechSynthesisSettings.voiceURI]);

  return (
    <form onSubmit={onSubmit} styleName="root">
      <div styleName="field">
        <label htmlFor="speaking-rate">{t("Text-to-Speech Speed")}</label>
        <select
          id="speaking-rate"
          value={rate}
          onChange={onChange}
          onBlur={onChange}
        >
          <option value={DEFAULT_SPEAKING_RATE}>{t("default")}</option>
          {[0.5, 1].map((defaultRate) => (
            <option key={defaultRate} value={defaultRate}>
              {defaultRate}
            </option>
          ))}
        </select>
      </div>
      {speechSynthesisSettings.voices && voiceURI && (
        <div styleName="field">
          <label htmlFor="speaking-rate">{t("Text-to-Speech Voice")}</label>
          <select
            id="speaking-rate"
            value={voiceURI}
            onChange={onVoiceURIChange}
            onBlur={onVoiceURIChange}
          >
            {speechSynthesisSettings.voices
              .filter((voice) => voice.lang.includes(Language.ko))
              .map((voice) => (
                <option key={voice.voiceURI} value={voice.voiceURI}>
                  {voice.name}
                </option>
              ))}
          </select>
        </div>
      )}
      <div styleName="buttons">
        <Anchor button href={TopicRoute.hangul}>
          {t("back")}
        </Anchor>
        <Button>{t("Save")}</Button>
      </div>
    </form>
  );
}
