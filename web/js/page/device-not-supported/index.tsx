import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { useSupportsGridLayout } from "web/js/hook/useSupportsGridLayout";

import { Anchor } from "web/js/component/anchor";
import { ArticleTitle } from "web/js/component/article-title";
import "./style.scss";

export function DeviceNotSupported() {
  const { t } = useTranslation();
  const supportsGridLayout = useSupportsGridLayout();

  return (
    <div styleName="root">
      <ArticleTitle>{t("Device not supported")}</ArticleTitle>
      {!supportsGridLayout && (
        <Trans>
          Sorry, your device does not support grid layout, please use any of the
          devices listed&nbsp;
          <Anchor href="https://caniuse.com/#feat=css-grid">here</Anchor>
        </Trans>
      )}
    </div>
  );
}
