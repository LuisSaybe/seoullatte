import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import './style.scss';

import { CURRENCY_AND_LABELS } from 'common/helpers';

export function CurrencySelector(props) {
  return (
    <select { ..._.omit(props, ['className']) } className={props.className} styleName='root'>
      <option></option>
      {
        CURRENCY_AND_LABELS.map(({ label, id }) => <option key={id} value={id}>{label}</option>)
      }
    </select>
  );
}

CurrencySelector.propTypes = {
  className: PropTypes.string
};
