import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { Subsection } from "web/js/component/subsection";
import { useNavigateToHash } from "web/js/hook/useNavigateToHash";
import { TopicRoute } from "web/js/interface/route";
import { U_IRREGULAR_ID } from "web/js/page/topic/irregular-predicate";
import { DialogGrid } from "web/js/component/dialog-grid";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";
import { MarginSizeName } from "web/js/interface/size";

export function AddingVowelsToPredicateStems() {
  const { t } = useTranslation();
  const navigate = useNavigateToHash();

  useEffect(() => {
    navigate();
  }, [navigate]);

  return (
    <>
      <Section>
        {t(
          "Some endings require adding ㅓ or ㅏ to a predicate stem in order to be used. We discuss how to determine which is added.",
        )}
        &nbsp;
        <Trans>
          First, if the predicate has any&nbsp;
          <Anchor to={TopicRoute.irregularPredicate}>irregular rules</Anchor>,
          apply them.
        </Trans>
        &nbsp;
        {t(
          "Then if the vowel closest to the end of the modified predicate stem is ㅏ or ㅗ then ㅏ is added to the stem, othwerwise ㅓ is added to the stem.",
        )}
      </Section>
      <Section>
        {t("Example predicate:")}&nbsp;
        <E q="64743">바라보다</E>
      </Section>
      <Section>
        {t(
          "First, we apply any irregular rules to 바라보다. 바라보다 is not irregular so we observe the stem 바라보.",
        )}
        &nbsp;
        {t(
          "The vowel closest to the end of the modified predicate stem 바라보 is ㅗ and so ㅏ will be added to the predicate stem.",
        )}
        &nbsp;
        {t("바라보 becomes 바라봐.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60931">나</E>
            <E q="85764">를</E>&nbsp;
            <E q="64743">보라봐</E>
            <E q="80220">서</E>&nbsp;
            <E q="32539">긴장돼</E>
            <E q="77247" senseIndexes={[2]}>
              졌
            </E>
            <E q="86094">어</E>
          </div>
          <UtteranceButton text="나를 보라봐서 긴장돼졌어">
            나를 보라봐서 긴장돼졌어
          </UtteranceButton>
          <i>{t("(They) stared at me so I became nervous.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("Example predicate:")} <E q="66248">바쁘다</E>
      </Section>
      <Section>
        {t("First, we apply any irregular rules to 바쁘다.")}
        &nbsp;
        <Trans>
          바쁘다 is&nbsp;
          <Anchor to={`${TopicRoute.irregularPredicate}#${U_IRREGULAR_ID}`}>
            으 irregular
          </Anchor>
          &nbsp;so ㅡ is removed from the predicate stem.
        </Trans>
        &nbsp;
        {t("바쁘 becomes 바ㅃ.")}
        &nbsp;
        {t(
          "The vowel closest to the end of the modified predicate stem 바ㅃ is ㅏ so ㅏ is added to the stem.",
        )}
        &nbsp;
        {t("바ㅃ becomes 바빠.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="15982">먹고살</E>
            <E q="84811">기에</E>&nbsp;
            <E q="66248">바빠</E>
          </div>
          <UtteranceButton text="먹고살기에 바빠">
            먹고 살기에 바빠.
          </UtteranceButton>
          <i>{t("(I'm) busy making ends meet.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <SectionTitle>{t("Placement of ㅓ or ㅏ")}</SectionTitle>
        {t(
          "After determining whether ㅓ or ㅏ is added to the predicate's stem, the new letter may be added in one of 4 ways.",
        )}
      </Section>
      <Section>
        <Subsection>
          <Section>
            {t("The letter may be added as a new syllable 어 or 아.")}
          </Section>
          <Subsection>
            <E q="58272">먹다</E> + (ㅓ or ㅏ) = 먹어
          </Subsection>
          <Section>
            {t("The final vowel (if any) may change to another vowel.")}
          </Section>
          <Subsection>
            <E q="65172">쓰다</E> + (ㅓ or ㅏ) = 써
          </Subsection>
          <Section>
            {t("Letters may be removed and added to the stem.")}
          </Section>
          <Subsection>
            <E q="57304">부르다</E> + (ㅓ or ㅏ) = 불러
          </Subsection>
          <Section>{t("The letter may not be added at all.")}</Section>
          <Subsection>
            <E q="27500">가다</E> + (ㅓ or ㅏ) = 가
          </Subsection>
        </Subsection>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "A student may also find these conjugated forms when searching for a predicate in a Korean dictionary.",
        )}
      </Section>
      <Section>
        {t(
          "We show examples here of various stem inflections after adding ㅓ or ㅏ.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <div styleName="table">
          <strong styleName="table-column-title">Predicate</strong>
          <strong styleName="table-column-title">Modified Stem</strong>
          <E q="67048">어울리다</E>
          <span>어울려</span>
          <E q="73277">하다</E>
          <span>해</span>
          <E q="89858" senseIndexes={[1]}>
            되다
          </E>
          <span>돼</span>
          <E q="73274">하얗다</E>
          <span>하얘</span>
          <E q="66315">이루다</E>
          <span>이루어</span>
          <E q="62354">낫다</E>
          <span>나아</span>
          <E q="70482">어떻다</E>
          <span>어때</span>
          <E q="62264">기다리다</E>
          <span>기다려</span>
          <E q="65172">쓰다</E>
          <span>써</span>
          <E q="73443">끄다</E>
          <span>꺼</span>
          <E senseIndexes={[1]} q="73270">
            피다
          </E>
          <span>피어</span>
          <E q="27500">가다</E>
          <span>가</span>
        </div>
      </Section>
    </>
  );
}
