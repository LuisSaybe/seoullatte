import React from 'react';

import { T } from 'common/i18n';

import './style.scss';

export function NotFound() {
  return (
    <div styleName='root'>
      <span>
        {T('Sorry, the page you are looking for does not exist or you do not have permission to see it')}
      </span>
    </div>
  );
}
