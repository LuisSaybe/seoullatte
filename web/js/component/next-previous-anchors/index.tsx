import _ from "lodash";
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
      {previous && <Anchor to={previous}>{t("previous")}</Anchor>}
      {next && (
        <Anchor to={next} styleName="next">
          {t("next")}
        </Anchor>
      )}
    </div>
  );
}
