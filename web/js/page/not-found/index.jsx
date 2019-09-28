import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div styleName='root'>
      <span>
        {t('Sorry, the page you are looking for does not exist or you do not have permission to see it')}
      </span>
    </div>
  );
}
