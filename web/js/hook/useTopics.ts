import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ITopic } from "web/js/interface/korean";
import { TopicRoute } from "web/js/interface/route";
import { Affixes } from "web/js/page/topic/affixes";
import { DeferentialSpeech } from "web/js/page/topic/deferential-speech";
import { Endings } from "web/js/page/topic/endings";
import { FormalAndInformalSpeech } from "web/js/page/topic/formal-and-informal-speech";
import { Hangul } from "web/js/page/topic/hangul";
import { IntimateSpeech } from "web/js/page/topic/intimate-speech";
import { IrregularPredicate } from "web/js/page/topic/irregular-predicate";
import { Noun } from "web/js/page/topic/noun";
import { PlainSpeech } from "web/js/page/topic/plain-speech";
import { PoliteSpeech } from "web/js/page/topic/polite-speech";
import { Predicate } from "web/js/page/topic/predicate";
import { SpeechLevel } from "web/js/page/topic/speech-level";
import { Syllable } from "web/js/page/topic/syllable";

export function useTopics(): ITopic[] {
  const { t } = useTranslation();
  const topics = useMemo<ITopic[]>(
    () => [
      {
        component: Hangul,
        description: t("Learn about Hangul, Hanja and how to write in Korean"),
        name: t("The Korean Writing System"),
        path: TopicRoute.hangul,
        searchTerms: "한글 한자",
      },
      {
        component: Syllable,
        description: t("Learn about syllables in Korean are formed"),
        name: t("Syllables"),
        path: TopicRoute.syllable,
        searchTerms: "",
      },
      {
        component: Noun,
        description: t("Learn about Sino-Korean and native Korean nouns"),
        name: t("Nouns"),
        path: TopicRoute.noun,
        searchTerms: "",
      },
      {
        component: Predicate,
        description: t("Learn about Korean adjectives, nouns and copulas."),
        name: t("Predicates"),
        path: TopicRoute.predicate,
        searchTerms: "",
      },
      {
        component: FormalAndInformalSpeech,
        description: t("The difference between 반말 and 존댓말"),
        name: t("Formal and Informal Speech"),
        path: TopicRoute.formalAndInformalSpeech,
        searchTerms: "존댓말 반말",
      },
      {
        component: Endings,
        description: t(
          "How predicate combine with endings to form a sentence.",
        ),
        name: t("Pre-Final and Final Endings"),
        path: TopicRoute.ending,
        searchTerms: "",
      },
      {
        component: SpeechLevel,
        description: t(
          "Learn about the different levels of Speech in the Korean language.",
        ),
        name: t("Speech Level"),
        path: TopicRoute.speechLevel,
        searchTerms: "",
      },
      {
        component: Affixes,
        description: t(
          "Learn how to add grammatical items to predicate stems.",
        ),
        name: t("Affixes"),
        path: TopicRoute.addingToStem,
        searchTerms: "",
      },
      {
        component: DeferentialSpeech,
        description: t(
          "Learn about the The Deferential Speech Level in Korean",
        ),
        name: t("The Deferential Speech Level"),
        path: TopicRoute.deferentialSpeech,
        searchTerms: "",
      },
      {
        component: PoliteSpeech,
        description: t("Learn about the The Polite Speech Level in Korean"),
        name: t("The Polite Speech Level"),
        path: TopicRoute.politeSpeech,
        searchTerms: "",
      },
      {
        component: IntimateSpeech,
        description: t("Learn about the The Intimate Speech Level in Korean"),
        name: t("The Intimate Speech Level"),
        path: TopicRoute.intimateSpeech,
        searchTerms: "",
      },
      {
        component: PlainSpeech,
        description: t("Learn about the The Plain Speech Level in Korean"),
        name: t("The Plain Speech Level"),
        path: TopicRoute.plainSpeech,
        searchTerms: "",
      },
      {
        component: IrregularPredicate,
        description: t("Irregular predicates in Korean"),
        name: t("Irregular Predicates"),
        path: TopicRoute.irregularPredicate,
        searchTerms: "",
      },
    ],
    [t],
  );

  return topics;
}
