import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Spinner } from 'web/js/component/spinner';

import './style.scss';

export function NaturalSpinner(props) {
  const propsCopy = _.omit(props, ['className']);

  return (
    <div className={props.className} styleName='root-natural-spinner' {...propsCopy}>
      <Spinner />
    </div>
  );
}

NaturalSpinner.propTypes = {
  className: PropTypes.string
};
