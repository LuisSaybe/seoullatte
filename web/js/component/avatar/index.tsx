import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

import "./style.scss";

export const EMPTY_IMAGE =
  "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E";

export function Avatar(props) {
  const propsCopy = _.omit(props, Object.keys(Avatar.propTypes));
  let styleName = "root";

  if (props.src === EMPTY_IMAGE) {
    styleName += " empty";
  }

  return (
    <img
      alt="avatar"
      className={props.className}
      styleName={styleName}
      src={props.src}
      {...propsCopy}
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  styleName: PropTypes.string,
};

Avatar.defaultProps = {
  className: "",
  src: EMPTY_IMAGE,
};
