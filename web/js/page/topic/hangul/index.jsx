import React from 'react';

import { T } from 'common/i18n';

import { Utterance } from 'web/js/application-component/utterance';

import './style.scss';

export function Hangul() {
  return (
    <div styleName='root'>
      <div styleName='title'>
        {T('The Korean Writing System')}
      </div>
      <section styleName='section'>
        <span>
          {T('한글 and 조선글 are the respective names of the contemporary Korean writing system used in South Korea and North Korea.')}
        </span>
        <span>
          {T('The original name was 훈민정음. It was introduced and promoted in 1446 by Sejong the Great.')}
        </span>
      </section>
      <section styleName='section'>
        {T('Below are the consonants and their corresponding names')}
      </section>
      <section styleName='section'>
        <div>
          <span styleName='character consonant'>ㄱ</span>
          <Utterance styleName='character' text='기역' />
        </div>
      </section>
      <section styleName='section'>
        {T('Below are the vowels whose names are represented by their respective sounds')}
      </section>
      <section styleName='section vowels'>
        <Utterance styleName='character' text={'ㅏ'} />
        <Utterance styleName='character' text='ㅓ' />
        <Utterance styleName='character' text='ㅗ' />
        <Utterance styleName='character' text='ㅜ' />
        <Utterance styleName='character' text='ㅡ' />
        <Utterance styleName='character' text='ㅣ' />
        <Utterance styleName='character' text='ㅐ' />
        <Utterance styleName='character' text='ㅔ' />
        <Utterance styleName='character' text='ㅚ' />
        <Utterance styleName='character' text='ㅟ' />
        <Utterance styleName='character' text='ㅢ' />
      </section>
    </div>
  );
}
