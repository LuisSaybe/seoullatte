import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import './style.scss';

export function InputAndLabel(props) {
  const id = _.random(0, Number.MAX_SAFE_INTEGER);

  return (
    <div className={props.className} { ...propsCopy }>
      <label styleName='label' htmlFor={id}>
        {props.label}
      </label>
      <props.inputFunction id={id} />
    </div>
  );
};

InputAndLabel.propTypes = {
  label: PropTypes.node.isRequired,
  inputFunction: PropTypes.func.isRequired
};
