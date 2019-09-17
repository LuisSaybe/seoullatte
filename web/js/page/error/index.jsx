import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'web/js/component/button';
import { T } from 'common/i18n';
import './style.scss';

export function Error(props) {
  let retry;

  if (props.onRetry) {
    retry = (
      <Button onClick={props.onRetry}>
        {T('Try again')}
      </Button>
    );
  }

  return (
    <div styleName='root'>
      <div>
        {T('Sorry we are not able to load your data')}
      </div>
      {retry}
    </div>
  );
}

Error.propTypes = {
  onRetry: PropTypes.func
};
