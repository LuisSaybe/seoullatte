import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function DoParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The particle <E q="86258">도</E> is added to a noun or particle and
          has several meanings.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("도 is used to indicate an inclusion or addition.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="31524">냉장고</E>
            <E q="86572">에</E>&nbsp;
            <E q="66371">사과</E>&nbsp;
            <E q="69296" senseIndexes={[2]}>
              말
            </E>
            <E q="78583">고</E>&nbsp;
            <E q="70787">딸기</E>
            <E q="86258">도</E>&nbsp;
            <E q="68797">있</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="냉장고에 사과 말고 딸기도 있다" />
          <i>
            {t(
              "In the fridge there are not only apples, but also strawberries.",
            )}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="62251">그거</E>
            <E q="80333">랑</E>&nbsp;
            <E q="26799">같이</E>&nbsp;
            <E q="17863">여기</E>&nbsp;
            <E q="68797">있</E>
            <E q="85853">는</E>&nbsp;
            <E q="44878">이것</E>
            <E q="86258">도</E>&nbsp;
            <E q="58272">먹</E>
            <E q="76444">어 봐</E>
          </div>
          <UtteranceButton text="그거랑 같이 여기 있는 이것도 먹어 봐" />
          <i>{t("You should also try eating this one along with that one.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("도 can be used to list multiple items.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="44878">이것</E>
            <E q="86258">도</E>&nbsp;
            <E q="70811">맛있</E>
            <E q="78583">고</E>&nbsp;
            <E q="31952">저것</E>
            <E q="86258">도</E>&nbsp;
            <E q="70811">맛있</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="이것도 맛있고 저것도 맛있다" />
          <i>{t("This is good and that is good.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("도 is used to indicate that something is permissable.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="26886">아이스크림</E>
            <E q="86289">이</E>&nbsp;
            <E q="89917">없</E>
            <E q="80262">으면</E>&nbsp;
            <E q="66940">얼음물</E>
            <E q="86258">도</E>&nbsp;
            <E q="60097">괜찮</E>
            <E q="86568">아요</E>
          </div>
          <UtteranceButton text="아이스크림이 없으면 얼음물도 괜찮아요" />
          <i>{t("If there is not ice cream, water is fine.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("도 is used to indicate an extreme or unexpected case.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="17869">이런</E>&nbsp;
            <E q="32507">기본적</E>
            <E q="88930">인</E>&nbsp;
            <E q="26229">계산</E>
            <E q="86258">도</E>&nbsp;
            <E q="17254">못</E>&nbsp;
            <E q="73277" senseIndexes={[22]}>
              한
            </E>
            &nbsp;
            <E q="82216">단</E>
            <E q="27260">말</E>
            <E q="86232">이</E>
            <E q="80806">야</E>
          </div>
          <UtteranceButton text="이런 기본적인 계산도 못 한단 말이야?" />
          <i>{t("You can't even do these basic calculations?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="43883">그</E>&nbsp;
            <E q="58161">사람</E>
            <E q="86232">이</E>&nbsp;
            <E q="14455">범인</E>
            <E q="86232">이</E>
            <E q="82217" senseIndexes={[1]}>
              라는
            </E>
            &nbsp;
            <E q="62835">것</E>
            <E q="86111">은</E>&nbsp;
            <E q="61734">상상</E>
            <E q="86258">도</E>&nbsp;
            <E q="73277">할</E>
            <E q="86668">수 없었다</E>
          </div>
          <UtteranceButton text="그 사람이 범인이라는 것은 상상도 할 수 없었다." />
          <i>{t("I could not even imagine that he was the culprit.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "도 is used to indicate that the marked item is contrary to expectations.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="43883">그</E>&nbsp;
            <E q="69295">많</E>
            <E q="80344">은</E>&nbsp;
            <E q="91895">일</E>
            <E q="86355">을</E>&nbsp;
            <E q="71157">이렇</E>
            <E q="77326">게</E>&nbsp;
            <E q="57305">빨리</E>
            <E q="86258">도</E>&nbsp;
            <E q="29692">끝내</E>
            <E q="74141">다니</E>
          </div>
          <UtteranceButton text="그 많은 일을 이렇게 빨리도 끝내다니?" />
          <i>{t("(You) finished so much work that quickly?")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
