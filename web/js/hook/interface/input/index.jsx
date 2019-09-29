import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import './style.scss';

export function Input(props) {
  const propsCopy = _.omit(props, ['error']);
  const inputStylename = props.error ? 'input error' : 'input';
  return <input styleName={inputStylename} { ...propsCopy } />;
}

Input.propTypes = {
  error: PropTypes.bool,
  styleName: PropTypes.string,
};

Input.defaultProps = {
  error: false
};
