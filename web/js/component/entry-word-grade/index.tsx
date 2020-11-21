import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      <Link
        styleName="link"
        to={`${routes.search()}?word_grades=고급&size=999`}
      >
        {t("Advanced word")}
      </Link>
    );
  } else if (grade === WordGrade.beginner) {
    content = (
      <Link
        styleName="link"
        to={`${routes.search()}?word_grades=초급&size=999`}
      >
        {t("Beginner word")}
      </Link>
    );
  } else if (grade === WordGrade.intermediate) {
    content = (
      <Link
        styleName="link"
        to={`${routes.search()}?word_grades=중급&size=999`}
      >
        {t("Intermediate word")}
      </Link>
    );
  } else if (grade === WordGrade.none) {
    content = t("No Word Grade");
  }

  return content;
}
