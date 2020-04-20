import { TopicRoute } from "web/js/interface/route";
import { EntryMetaInformation } from "web/js/interface/entry";

export function useEntryMetaInformation(q: string): EntryMetaInformation {
  const information = {
    76230: {
      routes: [TopicRoute.plainSpeech],
    },
    79401: {
      routes: [TopicRoute.deferentialSpeech],
    },
  };

  return information[q];
}
