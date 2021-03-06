import { useMemo, lazy } from "react";
import { useTranslation } from "react-i18next";

import { Topic, KoreaPartOfSpeech } from "web/js/interface/korean";
import { TopicRoute } from "web/js/interface/route";
import { Hangul } from "web/js/page/topic/hangul";
import { Syllable } from "web/js/page/topic/syllable";
import { Noun } from "web/js/page/topic/noun";
import { Predicate } from "web/js/page/topic/predicate";
import { FormalAndInformalSpeech } from "web/js/page/topic/formal-and-informal-speech";
import { Endings } from "web/js/page/topic/endings";
import { SpeechLevel } from "web/js/page/topic/speech-level";
import { AddingVowelsToPredicateStems } from "web/js/page/topic/adding-vowels-to-predicate-stems";
import { BatchimSuffix } from "web/js/page/topic/batchim-suffix";
import { DeferentialSpeech } from "web/js/page/topic/deferential-speech";
import { IntimateSpeech } from "web/js/page/topic/intimate-speech";
import { PoliteSpeech } from "web/js/page/topic/polite-speech";
import { PlainSpeech } from "web/js/page/topic/plain-speech";
import { IrregularPredicate } from "web/js/page/topic/irregular-predicate";
import { SubjectParticle } from "web/js/page/topic/subject-particle";
import { ObjectParticle } from "web/js/page/topic/object-particle";
import { TopicParticle } from "web/js/page/topic/topic-particle";
import { FormingSentences } from "web/js/page/topic/forming-sentences";
import { Copula } from "web/js/page/topic/copula";
import { ExistenceAndPosession } from "web/js/page/topic/existence-and-posession";
import { Negation } from "web/js/page/topic/negation";
import { PastTense } from "web/js/page/topic/past-tense";
import { PredicateAsModifier } from "web/js/page/topic/predicates-as-modifiers";
import { Determiner } from "web/js/page/topic/determiner";
import { BoundNoun } from "web/js/page/topic/bound-noun";
import { Desire } from "web/js/page/topic/desire";
import { Numbers } from "web/js/page/topic/numbers";
import { Counters } from "web/js/page/topic/counters";
import { Questions } from "web/js/page/topic/questions";
import { EParticle } from "web/js/page/topic/e-particle";
import { HonorificSuffix } from "web/js/page/topic/honorific-suffix";
import { PluralParticle } from "web/js/page/topic/plural-particle";
import { PossessiveParticle } from "web/js/page/topic/possessive-particle";
import { ParticleESo } from "web/js/page/topic/particle-e-so";
import { DoParticle } from "web/js/page/topic/do-particle";
import { ParticleButo } from "web/js/page/topic/particle-buto";
import { KajiParticle } from "web/js/page/topic/kaji-particle";
import { ParticleMan } from "web/js/page/topic/particle-man";
import { Batchim } from "web/js/page/topic/batchim";
import { Particles } from "web/js/page/topic/particles";

export function useTopics(): Topic[] {
  const { t } = useTranslation();
  return useMemo(
    () => [
      {
        component: Hangul,
        description: t("Learn about Hangul, Hanja and how to write in Korean"),
        name: t("The Korean Writing System"),
        paths: ["/", TopicRoute.hangul],
        relatedEntries: [91525, 72461, 69716],
        relatedPartOfSpeech: [],
      },
      {
        component: Syllable,
        description: t("Learn about syllables in Korean are formed"),
        name: t("Syllables"),
        paths: [TopicRoute.syllable],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: Noun,
        description: t("Learn about Sino-Korean and native Korean nouns"),
        name: t("Nouns"),
        paths: [TopicRoute.noun],
        relatedEntries: [],
        relatedPartOfSpeech: [KoreaPartOfSpeech.noun],
      },
      {
        component: Predicate,
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
        component: FormalAndInformalSpeech,
        description: t("The difference between 반말 and 존댓말"),
        name: t("Formal and Informal Speech"),
        paths: [TopicRoute.formalAndInformalSpeech],
        relatedEntries: [24607, 15843],
        relatedPartOfSpeech: [],
      },
      {
        component: Endings,
        description: t(
          "How predicates combine with endings to form a sentence.",
        ),
        name: t("Pre-Final and Final Endings"),
        paths: [TopicRoute.ending],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: SpeechLevel,
        description: t("Learn about the different levels of speech in Korean"),
        name: t("Speech Level"),
        paths: [TopicRoute.speechLevel],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: AddingVowelsToPredicateStems,
        description: t("Adding 어 or 아 to a predicate stem"),
        name: t("Adding ㅓ or ㅏ to a predicate stem"),
        paths: [TopicRoute.addingVowelToPredicateStem],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: Batchim,
        description: t(
          "Learn about 받침s and how why they are relevant in Korean.",
        ),
        name: t("Words with 받침"),
        paths: [TopicRoute.batchim],
        relatedEntries: [/*받침*/ 56544],
        relatedPartOfSpeech: [],
      },
      {
        component: BatchimSuffix,
        description: t("Adding 으 to predicate stems"),
        name: t("Adding 으 to predicates stems"),
        paths: [TopicRoute.addingUToPredicates],
        relatedEntries: [56544],
        relatedPartOfSpeech: [],
      },
      {
        component: DeferentialSpeech,
        description: t(
          "Learn about the The Deferential Speech Level in Korean",
        ),
        name: t("The Deferential Speech Level"),
        paths: [TopicRoute.deferentialSpeech],
        relatedEntries: [79398, 79397, 79402, 79401, 66884, 68880, 68883],
        relatedPartOfSpeech: [],
      },
      {
        component: IntimateSpeech,
        description: t("Learn about the the Intimate Speech Level in Korean"),
        name: t("The Intimate Speech Level"),
        paths: [TopicRoute.intimateSpeech],
        relatedEntries: [86094, 86093],
        relatedPartOfSpeech: [],
      },
      {
        component: PoliteSpeech,
        description: t("Learn about the Polite Speech Level in Korean"),
        name: t("The Polite Speech Level"),
        paths: [TopicRoute.politeSpeech],
        relatedEntries: [86568, 86571, 86116],
        relatedPartOfSpeech: [KoreaPartOfSpeech.ending],
      },
      {
        component: PlainSpeech,
        description: t("Learn about the The Plain Speech Level in Korean"),
        name: t("The Plain Speech Level"),
        paths: [TopicRoute.plainSpeech],
        relatedEntries: [
          85041 /*다*/,
          76235 /*으냐*/,
          76426 /*니*/,
          85037 /*는다*/,
          76230 /*냐*/,
          85033 /* ㄴ다 */,
          74141 /* 다니 */,
        ],
        relatedPartOfSpeech: [],
      },
      {
        component: HonorificSuffix,
        description: t("Learn about the Honorifix Ending 시"),
        name: t("The Honorific Ending 시"),
        paths: [TopicRoute.honorificEnding],
        relatedEntries: [
          80330 /*시*/,
          86609 /*으세요*/,
          86558 /*세요*/,
          80329 /*으시*/,
        ],
        relatedPartOfSpeech: [],
      },
      {
        component: IrregularPredicate,
        description: t("Irregular predicates in Korean"),
        name: t("Irregular Predicates"),
        paths: [TopicRoute.irregularPredicate],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: Particles,
        description: t("Learn about Korean particles and how they are used."),
        name: t("Particles"),
        paths: [TopicRoute.particles],
        relatedEntries: [],
        relatedPartOfSpeech: [KoreaPartOfSpeech.postpositionalParticle],
      },
      {
        component: SubjectParticle,
        description: t(
          "The subject particle 가 and 이 are used to indicate the subject of a clause",
        ),
        name: t("The Subject Particle 가 and 이"),
        paths: [TopicRoute.subjectParticle],
        relatedEntries: [66341, 86289],
        relatedPartOfSpeech: [],
      },
      {
        component: ObjectParticle,
        description: t(
          "The object particle 를 and 을 are used to indicate the object of a verb",
        ),
        name: t("The object particle 를 and 을"),
        paths: [TopicRoute.objectParticle],
        relatedEntries: [85764, 86355],
        relatedPartOfSpeech: [],
      },
      {
        component: TopicParticle,
        description: t(
          "The topic particle 는 and 은 are used to indicate the subject of the current clause",
        ),
        name: t("The Topic Particle 는 and 은"),
        paths: [TopicRoute.topicParticle],
        relatedEntries: [85851, 86111],
        relatedPartOfSpeech: [],
      },
      {
        component: FormingSentences,
        description: t("Learn about how to form Korean sentences"),
        name: t("Forming a Sentence"),
        paths: [TopicRoute.formingSentences],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: Copula,
        description: t("Learn about the predicate 이다 and 아니다"),
        name: t("이다 and 아니다"),
        paths: [TopicRoute.copular],
        relatedEntries: [86232, 26878],
        relatedPartOfSpeech: [],
      },
      {
        component: ExistenceAndPosession,
        description: t("Learn about the verb of existence and posession"),
        name: t("있다 and 없다"),
        paths: [TopicRoute.existenceAndPosession],
        relatedEntries: [68796, 68797, 89917],
        relatedPartOfSpeech: [],
      },
      {
        component: Negation,
        description: t("Learn how to negate verbs and adjectives in Korean"),
        name: t("Negation"),
        paths: [TopicRoute.negation],
        relatedEntries: [71372, 72587],
        relatedPartOfSpeech: [],
      },
      {
        component: PastTense,
        description: t("Learn about the past tense in Korean"),
        name: t("Past Tense"),
        paths: [TopicRoute.pastTense],
        relatedEntries: [68719, 66954, 68838, 68836],
        relatedPartOfSpeech: [],
      },
      {
        component: PredicateAsModifier,
        description: t("Changing verb and adjectives to modifiers in Korean"),
        name: t("Predicates as Modifiers"),
        paths: [TopicRoute.predicateAsModifiers],
        relatedEntries: [85853, 80344, 69058, 69057 /* ㄹ */],
        relatedPartOfSpeech: [],
      },
      {
        component: Determiner,
        description: t("Learn about Korean determiners"),
        name: t("Determiners"),
        paths: [TopicRoute.determiner],
        relatedEntries: [],
        relatedPartOfSpeech: [KoreaPartOfSpeech.determiner],
      },
      {
        component: BoundNoun,
        description: t("Learn about Korean bound nounds"),
        name: t("Bound Nouns"),
        paths: [TopicRoute.boundNoun],
        relatedEntries: [],
        relatedPartOfSpeech: [KoreaPartOfSpeech.boundNoun],
      },
      {
        component: Desire,
        description: t("Learn how to express desire with 고 싶다"),
        name: t("Expressing desire with 고 싶다"),
        paths: [TopicRoute.desire],
        relatedEntries: [75269],
        relatedPartOfSpeech: [],
      },
      {
        component: Numbers,
        description: t(
          "The Korean numebrs are made of 2 sets of numbers, native Korean numbers and Sino Korean numbers.",
        ),
        name: t("Numbers"),
        paths: [TopicRoute.numbers],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: Counters,
        description: t(
          "Korean counters are used to describe quantities of types of objects.",
        ),
        name: t("Counters"),
        paths: [TopicRoute.counters],
        relatedEntries: [],
        relatedPartOfSpeech: [],
      },
      {
        component: Questions,
        description: t("Learn how to pose questions in Korean"),
        name: t("Questions"),
        paths: [TopicRoute.questions],
        relatedEntries: [17199, 84991, 66237, 17860, 17856, 60319],
        relatedPartOfSpeech: [],
      },
      {
        component: EParticle,
        description: t("Learn about the location particle 에"),
        name: t("The Particle 에"),
        paths: [TopicRoute.particleLocationGoal],
        relatedEntries: [/*에*/ 86572, /*에는*/ 80294],
        relatedPartOfSpeech: [],
      },
      {
        component: PluralParticle,
        description: t("Learn about the plural particle 들"),
        name: t("The Plural Particle 들"),
        paths: [TopicRoute.pluralParticle],
        relatedEntries: [/*들*/ 86264],
        relatedPartOfSpeech: [],
      },
      {
        component: PossessiveParticle,
        description: t("Learn about the possessive particle 의"),
        name: t("The Possessive Particle 의"),
        paths: [TopicRoute.possessiveParticle],
        relatedEntries: [/*의*/ 86290],
        relatedPartOfSpeech: [],
      },
      {
        component: ParticleESo,
        description: t(
          "The Particle 에서 indicates a source or dynamic location.",
        ),
        name: t("The Particle 에서"),
        paths: [TopicRoute.esoParticle],
        relatedEntries: [/*에서*/ 68853],
        relatedPartOfSpeech: [],
      },
      {
        component: DoParticle,
        description: t("The Particle 도 the inclusion of items in a clause."),
        name: t("The Particle 도"),
        paths: [TopicRoute.doParticle],
        relatedEntries: [/*도*/ 86258],
        relatedPartOfSpeech: [],
      },
      {
        component: ParticleButo,
        description: t("The Particle 부터 indicates a starting point."),
        name: t("The Particle 부터"),
        paths: [TopicRoute.butoParticle],
        relatedEntries: [/*부터*/ 70055],
        relatedPartOfSpeech: [],
      },
      {
        component: KajiParticle,
        description: t("The Particle 까지 indicates an ending point."),
        name: t("The Particle 까지"),
        paths: [TopicRoute.kkajiParticle],
        relatedEntries: [/*까지*/ 69698],
        relatedPartOfSpeech: [],
      },
      {
        component: ParticleMan,
        description: t(
          "The Particle 만 indicates a limiting factor in discussion.",
        ),
        name: t("The Particle 만"),
        paths: [TopicRoute.manParticle],
        relatedEntries: [/*만*/ 86554],
        relatedPartOfSpeech: [],
      },
    ],
    [t],
  );
}
