import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RootState } from "../../lib/redux/reducer";
import { WordGrade } from "../../lib/interface/korean";

interface Props {
  q: number;
}

export function EntryWordGrade(props: Props) {
  const { t } = useTranslation();
  const entry = useSelector((state: RootState) => state.entry[props.q]);
  const grade = entry.getLowestWordGrade();
  let content = null;

  if (grade === WordGrade.advanced) {
    content = t("Advanced word");
  } else if (grade === WordGrade.beginner) {
    content = t("Beginner word");
  } else if (grade === WordGrade.intermediate) {
    content = t("Intermediate word");
  } else if (grade === WordGrade.none) {
    content = t("No Word Grade");
  }

  return content;
}
