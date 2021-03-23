import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import { ArticleTitle } from "web/js/component/article-title";
import { DefaultLayout } from "web/js/component/default-layout";
import { Section } from "web/js/component/section";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";
import { Anchor } from "web/js/component/anchor";

export function UseOniOS() {
  const { t } = useTranslation();

  return (
    <>
      <DefaultLayout>
        <Section marginSize={MarginSizeName.medium}>
          <ArticleTitle>{t("For iOS")}</ArticleTitle>
        </Section>
        <Section marginSize={MarginSizeName.large}>
          &bull;&nbsp;
          <Trans>
            Open <Anchor href="https://seoullatte.com">seoullatte.com</Anchor>
            &nbsp;in your web browser.
          </Trans>
        </Section>
        <Section>
          &bull;&nbsp;
          {t("Click the options button at the bottom of your screen.")}
        </Section>
        <Section>
          &bull;&nbsp;{t(`Click the "Add to Home Screen" option.`)}
        </Section>
        <Section>
          &bull;&nbsp;{t(`Click "Add in the top right corner.`)}
        </Section>
        <Section>
          &bull;&nbsp;
          {t("Seoul Latte will be added as an app icon to your home screen.")}
        </Section>
        <Section>
          &bull;&nbsp;
          {t("You can now use Seoul Latte as a full screen experience.")}
        </Section>
        <Section marginSize={MarginSizeName.large} styleName="images">
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              styleName="image"
              src={`https://luissaybe.nyc3.digitaloceanspaces.com/seoul-latte/images/apple-${index}.png`}
              key={index}
            />
          ))}
        </Section>
      </DefaultLayout>
      <Helmet>
        <title>{t("Use on iOS")}</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content={t("Use Seoul Latte on your iOS device")}
        />
      </Helmet>
    </>
  );
}
