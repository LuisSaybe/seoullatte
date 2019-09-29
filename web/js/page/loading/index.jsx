import React from 'react';

import { NaturalSpinner } from 'web/js/hook/interface/natural-spinner';

import './style.scss';

export function Loading() {
  return (
    <div styleName='root'>
      <NaturalSpinner styleName='spinner' />
    </div>
  );
}
