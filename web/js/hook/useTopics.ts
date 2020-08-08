import { useMemo, lazy } from "react";
import { useTranslation } from "react-i18next";

import { Topic } from "web/js/interface/korean";
import { TopicRoute } from "web/js/interface/route";

export function useTopics(): Topic[] {
  const { t } = useTranslation();
  return useMemo(
    () => [
      {
        component: lazy(() => import("web/js/page/topic/hangul")),
        description: t("Learn about Hangul, Hanja and how to write in Korean"),
        name: t("The Korean Writing System"),
        path: TopicRoute.hangul,
        searchTerms: "한글 한자 글",
      },
      {
        component: lazy(() => import("web/js/page/topic/syllable")),
        description: t("Learn about syllables in Korean are formed"),
        name: t("Syllables"),
        path: TopicRoute.syllable,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/noun")),
        description: t("Learn about Sino-Korean and native Korean nouns"),
        name: t("Nouns"),
        path: TopicRoute.noun,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/predicate")),
        description: t("Learn about Korean adjectives, nouns and copulas."),
        name: t("Predicates"),
        path: TopicRoute.predicate,
        searchTerms: "",
      },
      {
        component: lazy(() =>
          import("web/js/page/topic/formal-and-informal-speech"),
        ),
        description: t("The difference between 반말 and 존댓말"),
        name: t("Formal and Informal Speech"),
        path: TopicRoute.formalAndInformalSpeech,
        searchTerms: "존댓말 반말",
      },
      {
        component: lazy(() => import("web/js/page/topic/endings")),
        description: t(
          "How predicate combine with endings to form a sentence.",
        ),
        name: t("Pre-Final and Final Endings"),
        path: TopicRoute.ending,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/speech-level")),
        description: t("Learn about the different levels of speech in Korean"),
        name: t("Speech Level"),
        path: TopicRoute.speechLevel,
        searchTerms: "",
      },
      {
        component: lazy(() =>
          import("web/js/page/topic/adding-vowels-to-predicate-stems"),
        ),
        description: t("Adding 어 or 아 to a predicate stem"),
        name: t("Adding ㅓ or ㅏ to a predicate stem"),
        path: TopicRoute.addingVowelToPredicateStem,
        searchTerms: "ㅓ ㅏ 어 아",
      },
      {
        component: lazy(() => import("web/js/page/topic/batchim-suffix")),
        description: t("Adding 으 to predicate stems"),
        name: t("Adding 으 to Predicates Stems"),
        path: TopicRoute.addingUToPredicates,
        searchTerms: "으 받침 batchim",
      },
      {
        component: lazy(() => import("web/js/page/topic/deferential-speech")),
        description: t(
          "Learn about the The Deferential Speech Level in Korean",
        ),
        name: t("The Deferential Speech Level"),
        path: TopicRoute.deferentialSpeech,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/intimate-speech")),
        description: t("Learn about the the Intimate Speech Level in Korean"),
        name: t("The Intimate Speech Level"),
        path: TopicRoute.intimateSpeech,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/polite-speech")),
        description: t("Learn about the Polite Speech Level in Korean"),
        name: t("The Polite Speech Level"),
        path: TopicRoute.politeSpeech,
        searchTerms: "아요 어요 요",
      },
      {
        component: lazy(() => import("web/js/page/topic/plain-speech")),
        description: t("Learn about the The Plain Speech Level in Korean"),
        name: t("The Plain Speech Level"),
        path: TopicRoute.plainSpeech,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/irregular-predicate")),
        description: t("Irregular predicates in Korean"),
        name: t("Irregular Predicates"),
        path: TopicRoute.irregularPredicate,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/subject-particle")),
        description: t("Learn how to use the subject particle 이 and 가"),
        name: t("The Subject Particle"),
        path: TopicRoute.subjectParticle,
        searchTerms: "가 이 subject",
      },
      {
        component: lazy(() => import("web/js/page/topic/topic-particle")),
        description: t("Learn how to use the subject particle 는 and 은"),
        name: t("The Topic Particle"),
        path: TopicRoute.topicParticle,
        searchTerms: t("는 은 topic"),
      },
      {
        component: lazy(() => import("web/js/page/topic/forming-sentences")),
        description: t("Learn about how to form Korean sentences"),
        name: t("Forming a Sentence"),
        path: TopicRoute.formingSentences,
        searchTerms: "sentence clause predicate",
      },
      {
        component: lazy(() => import("web/js/page/topic/copula")),
        description: t("Learn about the predicate 이다 and 아니다"),
        name: t("이다 and 아니다"),
        path: TopicRoute.copular,
        searchTerms: "이다 아니다",
      },
      {
        component: lazy(() =>
          import("web/js/page/topic/existence-and-posession"),
        ),
        description: t("Learn about the verb of existence and posession"),
        name: t("있다 and 없다"),
        path: TopicRoute.existenceAndPosession,
        searchTerms: "있다 없다",
      },
      {
        component: lazy(() => import("web/js/page/topic/negation")),
        description: t("Learn how to negate verbs and adjectives in Korean"),
        name: t("Negation"),
        path: TopicRoute.negation,
        searchTerms: "안 지 않 negation negative",
      },
      {
        component: lazy(() => import("web/js/page/topic/past-tense")),
        description: t("Learn about the past tense in Korean"),
        name: t("Past Tense"),
        path: TopicRoute.pastTense,
        searchTerms: "었 았 었었 았었 past tense",
      },
      {
        component: lazy(() =>
          import("web/js/page/topic/predicates-as-modifiers"),
        ),
        description: t("Changing verb and adjectives to modifiers in Korean"),
        name: t("Predicates as Modifiers"),
        path: TopicRoute.predicateAsModifiers,
        searchTerms: "는 은 을",
      },
      {
        component: lazy(() => import("web/js/page/topic/prenoun")),
        description: t("Learn about Korean prenouns"),
        name: t("Prenouns"),
        path: TopicRoute.prenoun,
        searchTerms: "는 은 을",
      },
      {
        component: lazy(() => import("web/js/page/topic/bound-noun")),
        description: t("Learn about Korean bound nounds"),
        name: t("Bound Nouns"),
        path: TopicRoute.boundNoun,
        searchTerms: "는 은 을 수 지",
      },
      {
        component: lazy(() => import("web/js/page/topic/desire")),
        description: t("Learn how to express desire"),
        name: t("Desire"),
        path: TopicRoute.desire,
        searchTerms: "고 싶다",
      },
      {
        component: lazy(() => import("web/js/page/topic/counting")),
        description: t("Learn how to count in Korean"),
        name: t("Counting"),
        path: TopicRoute.counting,
        searchTerms: "",
      },
      {
        component: lazy(() => import("web/js/page/topic/questions")),
        description: t("Learn how to pose questions in Korean"),
        name: t("Questions"),
        path: TopicRoute.questions,
        searchTerms: "무엇 뭐 무슨 어떻게 언제 어디",
      },
      {
        component: lazy(() => import("web/js/page/topic/e-particle")),
        description: t("Learn about the particle 에"),
        name: t("The Particle 에"),
        path: TopicRoute.particleLocationGoal,
        searchTerms: "에",
      },
    ],
    [t],
  );
}
