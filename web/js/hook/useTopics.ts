import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ITopic } from "web/js/interface/korean";
import { TopicRoute } from "web/js/interface/route";
import { BoundNoun } from "web/js/page/topic/bound-noun";
import { Copula } from "web/js/page/topic/copula";
import { Counting } from "web/js/page/topic/counting";
import { DeferentialSpeech } from "web/js/page/topic/deferential-speech";
import { Desire } from "web/js/page/topic/desire";
import { EParticle } from "web/js/page/topic/e-particle";
import { Endings } from "web/js/page/topic/endings";
import { ExistenceAndPosession } from "web/js/page/topic/existence-and-posession";
import { FormalAndInformalSpeech } from "web/js/page/topic/formal-and-informal-speech";
import { Hangul } from "web/js/page/topic/hangul";
import { IntimateSpeech } from "web/js/page/topic/intimate-speech";
import { IrregularPredicate } from "web/js/page/topic/irregular-predicate";
import { Noun } from "web/js/page/topic/noun";
import { PastTense } from "web/js/page/topic/past-tense";
import { PlainSpeech } from "web/js/page/topic/plain-speech";
import { PoliteSpeech } from "web/js/page/topic/polite-speech";
import { Predicate } from "web/js/page/topic/predicate";
import { PredicateAsModifier } from "web/js/page/topic/predicates-as-modifiers";
import { Prenoun } from "web/js/page/topic/prenoun";
import { Questions } from "web/js/page/topic/questions";
import { SpeechLevel } from "web/js/page/topic/speech-level";
import { SubjectAndTopic } from "web/js/page/topic/subject-and-topic";
import { Suffixes } from "web/js/page/topic/suffixes";
import { Syllable } from "web/js/page/topic/syllable";

export function useTopics(): ITopic[] {
  const { t } = useTranslation();
  const topics = useMemo(
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
        component: Suffixes,
        description: t("Learn how to add suffixes to predicate stems."),
        name: t("Suffixes"),
        path: TopicRoute.suffixes,
        searchTerms: "받침",
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
        component: IntimateSpeech,
        description: t("Learn about the The Intimate Speech Level in Korean"),
        name: t("The Intimate Speech Level"),
        path: TopicRoute.intimateSpeech,
        searchTerms: "",
      },
      {
        component: PoliteSpeech,
        description: t("Learn about the The Polite Speech Level in Korean"),
        name: t("The Polite Speech Level"),
        path: TopicRoute.politeSpeech,
        searchTerms: "아요 어요 요",
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
      {
        component: Copula,
        description: t("Learn about the predicate 이다 and 아니다"),
        name: t("이다 and 아니다"),
        path: TopicRoute.copular,
        searchTerms: "이다 아니다",
      },
      {
        component: ExistenceAndPosession,
        description: t("Learn about the verb of existence and posession"),
        name: t("있다 and 없다"),
        path: TopicRoute.existenceAndPosession,
        searchTerms: "있다 없다",
      },
      {
        component: PastTense,
        description: t("Learn about the past tense in Korean"),
        name: t("Paste Tense"),
        path: TopicRoute.pastTense,
        searchTerms: "었 았 었었 았었 past tense",
      },
      {
        component: PredicateAsModifier,
        description: t("Changing verb and adjectives to modifiers in Korean"),
        name: t("Predicates as Modifiers"),
        path: TopicRoute.predicateAsModifiers,
        searchTerms: "는 은 을",
      },
      {
        component: SubjectAndTopic,
        description: t(
          "Learn how to indicate the topic or subject of a sentence",
        ),
        name: t("The subject and topic particle"),
        path: TopicRoute.subjectAndTopicParticle,
        searchTerms: "는 은 가 이",
      },
      {
        component: BoundNoun,
        description: t("Learn about Korean bound nounds"),
        name: t("Bound Nouns"),
        path: TopicRoute.boundNoun,
        searchTerms: "는 은 을 수 지",
      },
      {
        component: Prenoun,
        description: t("Learn about Korean prenouns"),
        name: t("Prenouns"),
        path: TopicRoute.prenoun,
        searchTerms: "는 은 을",
      },
      {
        component: Desire,
        description: t("Learn how to express desire"),
        name: t("Desire"),
        path: TopicRoute.desire,
        searchTerms: "고 싶다",
      },
      {
        component: Counting,
        description: t("Learn how to count in Korean"),
        name: t("Counting"),
        path: TopicRoute.counting,
        searchTerms: "",
      },
      {
        component: Questions,
        description: t("Learn how to pose questions in Korean"),
        name: t("Questions"),
        path: TopicRoute.questions,
        searchTerms: "무엇 뭐 무슨 어떻게 언제 어디",
      },
      {
        component: EParticle,
        description: t("Learn about the particle 에"),
        name: t("The Particle 에"),
        path: TopicRoute.particleLocationGoal,
        searchTerms: "에",
      },
    ],
    [t],
  );

  return topics;
}
