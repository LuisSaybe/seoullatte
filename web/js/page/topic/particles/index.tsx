import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { MarginSizeName } from "web/js/interface/size";

export function Particles() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "A particle is a part of Korean speech. Particles are added to a word to indicate that the word has a certain meaning or grammatical role in a sentence.",
        )}
        &nbsp;
        {t(
          "Case particles attach only to nouns while special particles may attach to a noun or another particle.",
        )}
        &nbsp;
        {t("Each particle does not have only 1 meaning but several.")}
        &nbsp;
        {/* prettier-ignore */}
        <Trans>
          For example the particle <E q="85761">로</E> has many meanings including, methods, direction of movement or cause.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "In the following section we introduce perhaps the 3 most important Korean particles. The subject particle, the topic particle and the object particle.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "A dedicated topic will be used to introduce more particles in later sections.",
        )}
      </Section>
    </>
  );
}
