import { TopicRoute } from "common/routes";
import { ITopic } from "web/js/interface";

import { Hangul } from "web/js/page/topic/hangul";
import { Noun } from "web/js/page/topic/noun";
import { Predicate } from "web/js/page/topic/predicate";
import { Syllable } from "web/js/page/topic/syllable";

export function useTopics(): ITopic[] {
  return [
    {
      component: Hangul,
      path: TopicRoute.hangul,
    },
    {
      component: Syllable,
      path: TopicRoute.syllable,
    },
    {
      component: Noun,
      path: TopicRoute.noun,
    },
    {
      component: Predicate,
      path: TopicRoute.predicate,
    },
  ];
}
