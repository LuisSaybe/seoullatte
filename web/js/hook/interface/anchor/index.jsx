import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './style.scss';

export function Anchor(props) {
  const propsCopy = _.omit(props, ['box', 'children', 'to', 'className', 'styleName', 'button', 'icon']);
  let styleName = 'root';

  if (props.button) {
    styleName += ' button';
  }

  if (props.icon) {
    styleName += ' icon';
  }

  if (props.box) {
    styleName += ' box';
  }

  if (props.to) {
    return (
      <Link className={props.className} styleName={styleName} to={props.to} { ...propsCopy }>
        {props.children}
      </Link>
    );
  }

  return (
    <a className={props.className} styleName={styleName} { ...propsCopy }>
      {props.children}
    </a>
  );
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  styleName: PropTypes.string,
  className: PropTypes.string,
  button: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.bool,
  box: PropTypes.bool
};

Anchor.defaultProps = {
  button: false,
  icon: false,
  box: false
};
