import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function ParticleMan() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The particle <E q="86554">만</E> is added to a noun or particle and
          has several meanings.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "Perhaps the most common usage of 만 is to limit the scope of discussion to the word the particle marks.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="43883">그</E>
            <E q="85851">는</E>&nbsp;
            <E q="91873">중요한</E>&nbsp;
            <E q="62870">서류</E>
            <E q="86572">에</E>&nbsp;
            <E q="92078">사인</E>
            <E q="86355">을</E>&nbsp;
            <E q="73277">할</E>&nbsp;
            <E q="83929">때</E>
            <E q="85851">는</E>&nbsp;
            <E q="27527">이</E>&nbsp;
            <E q="50303">만년필</E>
            <E q="86554">만</E>&nbsp;
            <E q="65172">쓴</E>
            <E q="85033">다</E>
          </div>
          <UtteranceButton text="그는 중요한 서류에 사인을 할 때는 이 만년필만 쓴다." />
          <i>
            {t(
              "He only writes with this fountain pen when signing important documents.",
            )}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            지수
            <E q="85851">는</E>&nbsp;
            <E q="18264">과일</E>&nbsp;
            <E q="79404">중</E>
            <E q="86572">에</E>&nbsp;
            <E q="70787">딸기</E>&nbsp;
            <E q="86554">만</E>&nbsp;
            <E q="27929">좋아한</E>
            <E q="85033">다</E>
          </div>
          <UtteranceButton text="지수는 과일 중에 딸기만 좋아한다." />
          <i>{t("Of all the fruits, Jisoo likes only strawberries.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60931">나</E>
            <E q="85851">는</E>&nbsp;
            <E q="20250">요즘</E>&nbsp;
            <E q="62774">상영하</E>
            <E q="85853">는</E>&nbsp;
            <E q="71624">영화</E>&nbsp;
            <E q="79404">중</E>
            <E q="86572">에</E>&nbsp;
            <E q="27527">이</E>&nbsp;
            <E q="71624">영화</E>
            <E q="86554">만</E>&nbsp;
            <E q="61190">보</E>
            <E q="75269">고 싶</E>
            <E q="86094">어</E>
          </div>
          <UtteranceButton text="나는 요즘 상영하는 영화 중에 이 영화만 보고 싶어." />
          <i>
            {t(
              "Of all the movies that are playing these days, I only want to see this movie.",
            )}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("만 can also be used to convey the speaker's least expectations.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17182">우리</E>&nbsp;
            <E q="16347">가위바위보</E>&nbsp;
            <E q="50537">딱</E>&nbsp;
            <E q="73278">한</E>
            <E q="26846">번</E>
            <E q="86554">만</E>&nbsp;
            <E q="26829">더</E>&nbsp;
            <E q="73277">해</E>
            <E q="75284">보</E>
            <E q="76236">자</E>
          </div>
          <UtteranceButton text="우리 가위바위보 딱 한 번만 더 해 보자." />
          <i>{t("Let us play rock-paper-scissors just one more time.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="61389">드라마</E>&nbsp;
            <E q="73278">한</E>
            <E q="71324">편</E>
            <E q="86554">만</E>&nbsp;
            <E q="26829">더</E>&nbsp;
            <E q="61190">보</E>
            <E q="78583">고</E>&nbsp;
            <E q="71456">나가</E>
            <E q="80259">면</E>&nbsp;
            <E q="71372">안</E>
            <E q="89858" senseIndexes={[12]}>
              될
            </E>
            <E q="86335">까</E>
            {t("?")}
          </div>
          <UtteranceButton text="드라마 한 편만 더 보고 나가면 안 될까?" />
          <i>{t("Can't we watch the TV drama just one more time?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("만 can be used to described a required or preferred condition.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            Minjun
            <E q="85851">는</E>&nbsp;
            <E q="60931">나</E>
            <E q="86554">만</E>&nbsp;
            <E q="61190">보</E>
            <E q="80259">면</E>&nbsp;
            <E q="84991">뭐</E>
            <E q="70074">라고</E>&nbsp;
            <E q="73277">하</E>
            <E q="81524">더라</E>
          </div>
          <UtteranceButton text="민준이는 나만 보면 뭐라고 하더라" />
          <i>{t("Minjun says something only when he sees me.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60931">나</E>
            <E q="85851">는</E>&nbsp;
            <E q="20211">배</E>
            <E q="66341">가</E>&nbsp;
            <E q="66030">많이</E>&nbsp;
            <E q="18396">고프</E>
            <E q="72587">지 않</E>
            <E q="80220">아서</E>&nbsp;
            <E q="44878">이것</E>
            <E q="86554">만</E>&nbsp;
            <E q="58272">먹</E>
            <E q="80207">어도</E>&nbsp;
            <E q="72147">충분할</E>&nbsp;
            <E q="71833">것 같</E>
            <E q="86093">아</E>
          </div>
          <UtteranceButton text="나는 배가 많이 고프지 않아서 이것만 먹어도 충분할 것 같아." />
          <i>
            {t(
              "I'm not very hungry so I even if I eat this, it will be sufficient.",
            )}
          </i>
        </DialogGrid>
      </Section>
    </>
  );
}
