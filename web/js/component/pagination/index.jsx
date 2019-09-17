import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export function Pagination({ value, render, more }) {
  const ids = _.flatMap(value.pages);

  return (
    <>
      {ids.map((id, index, array) => <React.Fragment key={id}>{render(id, index, array)}</React.Fragment>)}
      {ids.length < value.count ? more : null}
    </>
  );
}

Pagination.propTypes = {
  value: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  more: PropTypes.node.isRequired
};
