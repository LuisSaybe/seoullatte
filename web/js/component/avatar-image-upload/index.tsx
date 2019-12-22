import _ from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Avatar } from "web/js/component/avatar";
import { EMPTY_IMAGE } from "web/js/component/avatar";
import { Spinner } from "web/js/component/spinner";

import "./style.scss";

interface IInterface {
  disabled?: boolean;
  id?: string;
  onChange?: React.ChangeEventHandler;
  src?: string;
  styleName?: string;
}

export function AvatarImageUpload(props) {
  const input = React.createRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);
  const {
    disabled,
    id,
    onChange: onChangeFromProps,
    src: srcFromProps,
    ...rest
  } = props;
  const [src, setSrc] = useState(srcFromProps);
  const onChange = (e) => {
    if (e.target.files.length === 1) {
      const reader = new FileReader();
      reader.onload = () => {
        setSrc(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(e.target.files[0]);
      setLoading(true);
    }

    onChangeFromProps(e);
  };
  const onClick = () => {
    input.current.click();
  };

  const avatarOrLoading = loading ? (
    <Spinner styleName="spinner" />
  ) : (
    <Avatar styleName="avatar" src={src} />
  );

  useEffect(() => {
    setSrc(props.src);
  }, [props.src]);

  return (
    <button type="button" onClick={onClick} styleName="root" {...rest}>
      <input
        disabled={disabled}
        id={id}
        onChange={onChange}
        ref={input}
        type="file"
        accept="image/*"
        styleName="input"
      />
      {avatarOrLoading}
    </button>
  );
}

AvatarImageUpload.defaultProps = {
  disabled: false,
  id: "",
  src: EMPTY_IMAGE,
};
