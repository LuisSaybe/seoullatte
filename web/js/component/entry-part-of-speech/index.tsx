import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";
import { KoreaPartOfSpeech } from "web/js/interface/korean";

interface Props extends React.HTMLAttributes<HTMLElement> {
  q: number;
}

export function EntryPartOfSpeech(props: Props) {
  const { q, ...rest } = props;
  const { t } = useTranslation();
  const entry = useSelector((state: RootState) => state.entry[q]);
  const part = entry.getPartOfSpeech();
  let content;

  if (part === KoreaPartOfSpeech.adjective) {
    content = t("Adjective");
  } else if (part === KoreaPartOfSpeech.adverb) {
    content = t("Adverb");
  } else if (part === KoreaPartOfSpeech.affix) {
    content = t("Affix");
  } else if (part === KoreaPartOfSpeech.boundNoun) {
    content = t("Bound Noun");
  } else if (part === KoreaPartOfSpeech.determiner) {
    content = t("Determiner");
  } else if (part === KoreaPartOfSpeech.ending) {
    content = t("Ending");
  } else if (part === KoreaPartOfSpeech.interjection) {
    content = t("Interjection");
  } else if (part === KoreaPartOfSpeech.none) {
    content = t("None");
  } else if (part === KoreaPartOfSpeech.noun) {
    content = t("Noun");
  } else if (part === KoreaPartOfSpeech.number) {
    content = t("Number");
  } else if (part === KoreaPartOfSpeech.verb) {
    content = t("Verb");
  }

  return <span {...rest}>{content}</span>;
}
