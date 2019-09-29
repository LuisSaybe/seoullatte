import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export class Color {
  static main = 'main';
  static white = 'white';
}

export function Spinner(props) {
  const styleName = 'root ' + props.color;
  const propsCopy = _.omit(props, ['color', 'className']);

  return (
    <FontAwesomeIcon
      className={props.className}
      styleName={styleName}
      icon={faSyncAlt}
      { ...propsCopy }
    />
  );
}


Spinner.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string
};

Spinner.defaultProps = {
  color: Color.main
};
