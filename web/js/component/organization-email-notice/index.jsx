import React from 'react';

import { T } from 'common/i18n';

import './style.scss';

export function OrganizationEmailNotice() {
  return (
    <div styleName='email-note'>
      {T('This email will be used so your customers can contact you.')}
      &nbsp;
      {T('We will also use this email to send you organization specific communication.')}
    </div>
  );
}
