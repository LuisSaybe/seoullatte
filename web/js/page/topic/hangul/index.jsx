import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import { Utterance } from 'web/js/application-hook/utterance';

import './style.scss';

export function Hangul() {
  const { t } = useTranslation();

  return (
    <div styleName='root'>
      <div styleName='title'>
        {t('The Korean Writing System')}
      </div>
      <section styleName='section'>
        <Trans>
          <Utterance text='한글'>한글</Utterance> and <Utterance text='조선글'>조선글</Utterance> are the respective names of the contemporary Korean writing system used in South Korea and North Korea.
        </Trans>
        &nbsp;
        <Trans>
          <Utterance text='훈민정음'>훈민정음</Utterance>, the original name of the writing system, was introduced and promoted in 1446 by Sejong the Great.
        </Trans>
      </section>
      <section styleName='section'>
        {t('Below are the consonants and their corresponding names')}
      </section>
      <section styleName='section consonants'>
        {
          [
            [ 'ㄱ', '기역' ],
            [ 'ㄲ', '쌍기역' ],
            [ 'ㄴ', '니은' ],
            [ 'ㄷ', '디귿' ],
            [ 'ㄸ', '쌍디귿' ],
            [ 'ㄹ', '리을' ],
            [ 'ㅁ', '미음' ],
            [ 'ㅂ', '비읍' ],
            [ 'ㅃ', '쌍비읍' ],
            [ 'ㅅ', '시옷' ],
            [ 'ㅆ', '쌍시옷' ],
            [ 'ㅇ', '이응' ],
            [ 'ㅈ', '지읒' ],
            [ 'ㅉ', '쌍지읒' ],
            [ 'ㅊ', '치읓' ],
            [ 'ㅋ', '키읔' ],
            [ 'ㅌ', '티읕' ],
            [ 'ㅍ', '피읖' ],
            [ 'ㅎ', '히읗' ]
          ].map(([ character, name ], index) => (
            <div key={index}>
              <span styleName='character consonant'>{character}</span>
              <Utterance text={name} styleName='character'>{name}</Utterance>
            </div>
          ))
        }
      </section>
      <section styleName='section'>
        {t('Below are the vowels whose names are represented by their respective sounds')}
      </section>
      <section styleName='section vowels'>
        {['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ', 'ㅐ', 'ㅔ', 'ㅚ', 'ㅟ'].map(character =>
         <Utterance key={character} text={character} styleName='character'>{character}</Utterance>)
        }
        <Utterance styleName='character' text='으이'>ㅢ</Utterance>
      </section>
    </div>
  );
}
