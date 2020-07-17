import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { updateUserInterface } from "web/js/redux/user-interface/action";
import { Anchor } from "web/js/component/anchor";
import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  previous?: string;
  next?: string;
}

export function NextPreviousAnchors(props: IInterface) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { next, previous, ...rest } = props;
  const styleName = previous ? "root has-previous" : "root";
  const onAnchorClick = () => {
    dispatch(
      updateUserInterface({
        returnTo: null,
      }),
    );
  };

  return (
    <div styleName={styleName} {...rest}>
      {previous && (
        <Anchor onClick={onAnchorClick} button to={previous}>
          {t("previous")}
        </Anchor>
      )}
      {next && (
        <Anchor onClick={onAnchorClick} button to={next} styleName="next">
          {t("next")}
        </Anchor>
      )}
    </div>
  );
}
