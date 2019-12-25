import { TopicRoute } from "common/routes";
import { ITopic } from "web/js/interface";

import { useTranslation } from "react-i18next";
import { DeferentialSpeech } from "web/js/page/topic/deferential-speech";
import { FamiliarSpeech } from "web/js/page/topic/familiar-speech";
import { Hangul } from "web/js/page/topic/hangul";
import { IntimateSpeech } from "web/js/page/topic/intimate-speech";
import { Noun } from "web/js/page/topic/noun";
import { PlainSpeech } from "web/js/page/topic/plain-speech";
import { PoliteSpeech } from "web/js/page/topic/polite-speech";
import { Predicate } from "web/js/page/topic/predicate";
import { Syllable } from "web/js/page/topic/syllable";
import { SpeechLevel } from "../page/topic/speech-level";

export function useTopics(): ITopic[] {
  const { t } = useTranslation();

  return [
    {
      component: Hangul,
      name: t("The Korean Writing System"),
      path: TopicRoute.hangul,
    },
    {
      component: Syllable,
      name: t("Syllables"),
      path: TopicRoute.syllable,
    },
    {
      component: Noun,
      name: t("Nouns"),
      path: TopicRoute.noun,
    },
    {
      component: Predicate,
      name: t("Predicates"),
      path: TopicRoute.predicate,
    },
    {
      component: SpeechLevel,
      name: t("Speech Level"),
      path: TopicRoute.speechLevel,
    },
    {
      component: DeferentialSpeech,
      name: t("The Deferential Speech Level"),
      path: TopicRoute.deferentialSpeech,
    },
    {
      component: PoliteSpeech,
      name: t("The Polite Speech Level"),
      path: TopicRoute.politeSpeech,
    },
    {
      component: IntimateSpeech,
      name: t("The Intimate Speech Level"),
      path: TopicRoute.intimateSpeech,
    },
    {
      component: FamiliarSpeech,
      name: t("The Familiar Speech Level"),
      path: TopicRoute.familiarSpeech,
    },
  ];
}
