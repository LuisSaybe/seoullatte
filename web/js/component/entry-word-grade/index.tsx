import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Anchor } from "web/js/component/anchor";
import { RootState } from "web/js/redux/reducer";
import { WordGrade } from "web/js/interface/korean";
import { routes } from "web/js/routes";
import "./style.scss";

interface Props {
  q: number;
}

export function EntryWordGrade(props: Props) {
  const { t } = useTranslation();
  const entry = useSelector((state: RootState) => state.entry[props.q]);
  const grade = entry.getLowestWordGrade();
  let content = null;

  if (grade === WordGrade.advanced) {
    content = (
      <Anchor to={`${routes.search()}?word_grades=고급&page=0`}>
        {t("Advanced word")}
      </Anchor>
    );
  } else if (grade === WordGrade.beginner) {
    content = (
      <Anchor to={`${routes.search()}?word_grades=초급&page=0`}>
        {t("Beginner word")}
      </Anchor>
    );
  } else if (grade === WordGrade.intermediate) {
    content = (
      <Anchor to={`${routes.search()}?word_grades=중급&page=0`}>
        {t("Intermediate word")}
      </Anchor>
    );
  } else if (grade === WordGrade.none) {
    content = t("No Word Grade");
  }

  return content;
}
