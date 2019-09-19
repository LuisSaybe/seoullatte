import React from 'react';
import { Link }from 'react-router-dom';

import { T } from 'common/i18n';

import { routes } from 'web/js/routes';

import './style.scss';

export function Landing() {
  return (
    <div styleName='root'>
      <Link to={routes.hangul()}>
        {T('Hangul')}
      </Link>
    </div>
  );
}
