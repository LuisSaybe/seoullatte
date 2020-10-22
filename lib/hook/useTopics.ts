import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Topic, KoreaPartOfSpeech } from "../interface/korean";
import { TopicRoute } from "../interface/route";

export function useTopics(): Topic[] {
  const { t } = useTranslation();
  return useMemo(
    () => [
      {
        description: t("Learn about Hangul, Hanja and how to write in Korean"),
        name: t("The Korean Writing System"),
        paths: ["/", TopicRoute.hangul],
        relatedEntries: [91525, 72461, 69716],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about syllables in Korean are formed"),
        name: t("Syllables"),
        paths: [TopicRoute.syllable],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about Sino-Korean and native Korean nouns"),
        name: t("Nouns"),
        paths: [TopicRoute.noun],
        relatedEntries: [],
        relatedPartOfSpeech: [KoreaPartOfSpeech.noun],
      },
      {
        description: t("Learn about Korean adjectives, nouns and copulas."),
        name: t("Predicates"),
        paths: [TopicRoute.predicate],
        relatedEntries: [],
        relatedPartOfSpeech: [
          KoreaPartOfSpeech.verb,
          KoreaPartOfSpeech.adjective,
          KoreaPartOfSpeech.affix,
        ],
      },
      {
        description: t("The difference between 반말 and 존댓말"),
        name: t("Formal and Informal Speech"),
        paths: [TopicRoute.formalAndInformalSpeech],
        relatedEntries: [24607, 15843],
        relatedPartOfSpeech: [],
      },
      {
        description: t(
          "How predicate combine with endings to form a sentence.",
        ),
        name: t("Pre-Final and Final Endings"),
        paths: [TopicRoute.ending],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about the different levels of speech in Korean"),
        name: t("Speech Level"),
        paths: [TopicRoute.speechLevel],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Adding 어 or 아 to a predicate stem"),
        name: t("Adding ㅓ or ㅏ to a predicate stem"),
        paths: [TopicRoute.addingVowelToPredicateStem],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Adding 으 to predicate stems"),
        name: t("Adding 으 to Predicates Stems"),
        paths: [TopicRoute.addingUToPredicates],
        relatedEntries: [56544],
        relatedPartOfSpeech: [],
      },
      {
        description: t(
          "Learn about the The Deferential Speech Level in Korean",
        ),
        name: t("The Deferential Speech Level"),
        paths: [TopicRoute.deferentialSpeech],
        relatedEntries: [79398, 79397, 79402, 79401, 66884, 68880, 68883],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about the the Intimate Speech Level in Korean"),
        name: t("The Intimate Speech Level"),
        paths: [TopicRoute.intimateSpeech],
        relatedEntries: [86094, 86093],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about the Polite Speech Level in Korean"),
        name: t("The Polite Speech Level"),
        paths: [TopicRoute.politeSpeech],
        relatedEntries: [86568, 86571, 86116],
        relatedPartOfSpeech: [KoreaPartOfSpeech.ending],
      },
      {
        description: t("Learn about the The Plain Speech Level in Korean"),
        name: t("The Plain Speech Level"),
        paths: [TopicRoute.plainSpeech],
        relatedEntries: [
          85041 /*다*/,
          76235 /*으냐*/,
          76426 /*니*/,
          85037 /*는다*/,
        ],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Irregular predicates in Korean"),
        name: t("Irregular Predicates"),
        paths: [TopicRoute.irregularPredicate],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t(
          "The subject particle 가 and 이 are used to indicate the subject of a clause",
        ),
        name: t("The Subject Particle 가 and 이"),
        paths: [TopicRoute.subjectParticle],
        relatedEntries: [66341, 86289],
        relatedPartOfSpeech: [],
      },
      {
        description: t(
          "The object particle 를 and 을 are used to indicate the object of a verb",
        ),
        name: t("The object particle 를 and 을"),
        paths: [TopicRoute.objectParticle],
        relatedEntries: [85764, 86355],
        relatedPartOfSpeech: [],
      },
      {
        description: t(
          "The topic particle 는 and 은 are used to indicate the subject of the current clause",
        ),
        name: t("The Topic Particle 는 and 은"),
        paths: [TopicRoute.topicParticle],
        relatedEntries: [85851, 86111],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about how to form Korean sentences"),
        name: t("Forming a Sentence"),
        paths: [TopicRoute.formingSentences],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about the predicate 이다 and 아니다"),
        name: t("이다 and 아니다"),
        paths: [TopicRoute.copular],
        relatedEntries: [92101, 26878],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about the verb of existence and posession"),
        name: t("있다 and 없다"),
        paths: [TopicRoute.existenceAndPosession],
        relatedEntries: [68796, 68797, 89917],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn how to negate verbs and adjectives in Korean"),
        name: t("Negation"),
        paths: [TopicRoute.negation],
        relatedEntries: [71372, 72587],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about the past tense in Korean"),
        name: t("Past Tense"),
        paths: [TopicRoute.pastTense],
        relatedEntries: [68719, 66954, 68838, 68836],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Changing verb and adjectives to modifiers in Korean"),
        name: t("Predicates as Modifiers"),
        paths: [TopicRoute.predicateAsModifiers],
        relatedEntries: [85853, 80344, 69058],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about Korean determiners"),
        name: t("Determiners"),
        paths: [TopicRoute.determiner],
        relatedEntries: [],
        relatedPartOfSpeech: [KoreaPartOfSpeech.determiner],
      },
      {
        description: t("Learn about Korean bound nounds"),
        name: t("Bound Nouns"),
        paths: [TopicRoute.boundNoun],
        relatedEntries: [],
        relatedPartOfSpeech: [KoreaPartOfSpeech.boundNoun],
      },
      {
        description: t("Learn how to express desire"),
        name: t("Desire"),
        paths: [TopicRoute.desire],
        relatedEntries: [75269],
        relatedPartOfSpeech: [],
      },
      {
        description: t(
          "The Korean numebrs are made of 2 sets of numbers, native Korean numbers and Sino Korean numbers.",
        ),
        name: t("Numbers"),
        paths: [TopicRoute.numbers],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t(
          "Korean counters are used to describe quantities of types of objects.",
        ),
        name: t("Counters"),
        paths: [TopicRoute.counters],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn how to pose questions in Korean"),
        name: t("Questions"),
        paths: [TopicRoute.questions],
        relatedEntries: [17199, 84991, 66237, 17860, 17856, 60319],
        relatedPartOfSpeech: [],
      },
      {
        description: t("Learn about the particle 에"),
        name: t("The Particle 에"),
        paths: [TopicRoute.particleLocationGoal],
        relatedEntries: [/*에*/ 86572, /*에는*/ 80294],
        relatedPartOfSpeech: [],
      },
    ],
    [t],
  );
}
