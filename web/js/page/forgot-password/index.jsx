import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ApplicationContext } from 'web/js/context';
import { Button } from 'web/js/component/button';
import { Input } from 'web/js/component/input';

import './style.scss';

export function ForgotPassword() {
  const { t } = useTranslation();
  const [ displayFailure ] = useState(false);
  const { userId } = useContext(ApplicationContext);

  let content;

  if (userId === null) {
    let failure;
    let success;

    if (displayFailure) {
      failure = (
        <div>
          {t('Sorry we are not able to recover your password, please try again later')}
        </div>
      );
    }

    if (displayFailure) {
      success = (
        <div>
          {t('Thanks, we will send you an email as quick as we can')}
        </div>
      );
    }

    content = (
      <>
        {failure}
        {success}
        <form styleName='form'>
          <span styleName='title'>
            {t('Reset Password')}
          </span>
          <i styleName='fa-key' className='fas fa-key'></i>
          <Input placeholder={t('Email')} type='email' />
          <Button>
            {t('Submit')}
          </Button>
        </form>
      </>
    );
  } else {
    content = (
      <>
        <span>
          {t('You are already logged in')}
        </span>
      </>
    );
  }

  return (
    <div styleName='root'>
      {content}
    </div>
  );
}
