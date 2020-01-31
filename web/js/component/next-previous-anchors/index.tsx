import React from "react";
import { useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  previous?: string;
  next?: string;
}

export function NextPreviousAnchors(props: IInterface) {
  const { t } = useTranslation();
  const { next, previous, ...rest } = props;
  const styleName = previous ? "root has-previous" : "root";

  return (
    <div styleName={styleName} {...rest}>
      {previous && (
        <Anchor button to={previous}>
          {t("previous")}
        </Anchor>
      )}
      {next && (
        <Anchor button to={next} styleName="next">
          {t("next")}
        </Anchor>
      )}
    </div>
  );
}
