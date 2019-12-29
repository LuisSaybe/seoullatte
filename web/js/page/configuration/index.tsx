import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Language } from "common/model";

import {
  DispatchSpeechSynthesisSettingsContext,
  LocationsContext,
  SpeechSynthesisSettingsContext,
} from "web/js/context";

import { Anchor } from "web/js/component/anchor";
import { Button } from "web/js/component/button";
import { StandardReducerOperation } from "web/js/interface";
import { routes } from "web/js/routes";
import "./style.scss";

export function Configuration() {
  const DEFAULT_SPEAKING_RATE = -1;
  const { t } = useTranslation();
  const locations = useContext(LocationsContext);
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
  const dispatchSpeechSynthesisSettings = useContext(
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

    dispatchSpeechSynthesisSettings({
      data,
      type: StandardReducerOperation.MERGE,
    });
  };

  let backButtonTo;

  if (locations.length > 1) {
    backButtonTo = locations[locations.length - 2].pathname;
  } else {
    backButtonTo = routes.landing();
  }

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
          <label htmlFor="voice-uri">{t("Text-to-Speech Voice")}</label>
          <select
            id="voice-uri"
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
        <Anchor button to={backButtonTo}>
          {t("back")}
        </Anchor>
        <Button>{t("save")}</Button>
      </div>
    </form>
  );
}
