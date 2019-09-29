import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import './style.scss';

export class MessageBlockType {
  static main = 'main';
  static success = 'success';
  static error = 'error';
  static warning = 'warning';
}

export function MessageBlock(props) {
  const styleName = 'root ' + props.type;
  const propsCopy = _.omit(props, ['type']);

  return (
    <div styleName={styleName} { ...propsCopy }>
      {props.children}
    </div>
  );
}

MessageBlock.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

MessageBlock.defaultProps = {
  type: MessageBlockType.main
};
