import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { Language } from "../../lib/helper/language";
import { useLastRouteOrHome } from "../../lib/hook/useLastRouteOrHome";
import { updateUserInterface } from "../../lib/redux/user-interface/action";
import { RootState } from "../../lib/redux/reducer";
import { DEFAULT_SPEAKING_RATE } from "../../lib/interface/speech-synthesis";
import { DefaultLayout } from "../../components/default-layout";
import { ArticleTitle } from "../../components/article-title";
import styles from "./index.module.scss";

export default function Configuration() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const toRoute = useLastRouteOrHome();
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );
  const [voiceURI, setVoiceURI] = useState(
    speechSynthesisSettings.voiceURI ?? null,
  );
  const onChange = (e) => {
    const rate = Number(e.target.value);
    const data = { ...speechSynthesisSettings };
    if (rate === DEFAULT_SPEAKING_RATE) {
      delete data.rate;
    } else {
      data.rate = rate;
    }

    dispatch(
      updateUserInterface({
        speechSynthesisSettings: data,
      }),
    );
  };
  const onVoiceURIChange = (e) => {
    dispatch(
      updateUserInterface({
        speechSynthesisSettings: {
          ...speechSynthesisSettings,
          voiceURI: e.target.value,
        },
      }),
    );
  };

  useEffect(() => {
    if (speechSynthesisSettings?.voiceURI) {
      setVoiceURI(speechSynthesisSettings.voiceURI);
    }
  }, [speechSynthesisSettings?.voiceURI]);

  return (
    <>
      <DefaultLayout>
        <ArticleTitle>Settings</ArticleTitle>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="speaking-rate">
            {t("Text-to-Speech Speed")}
          </label>
          <select
            className={styles.select}
            id="speaking-rate"
            value={speechSynthesisSettings.rate ?? DEFAULT_SPEAKING_RATE}
            onChange={onChange}
            onBlur={onChange}
          >
            <option value={DEFAULT_SPEAKING_RATE}>{t("default")}</option>
            {[0.5, 0.7, 1].map((defaultRate) => (
              <option key={defaultRate} value={defaultRate}>
                {defaultRate}
              </option>
            ))}
          </select>
        </div>
        {voiceURI && (
          <div className={styles.field}>
            <label className={styles.label} htmlFor="voice-uri">
              {t("Text-to-Speech Voice")}
            </label>
            <select
              className={styles.label}
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
      </DefaultLayout>
      <Helmet>
        <title>Settings</title>
        <meta name="description" content="Settings" />
      </Helmet>
    </>
  );
}
