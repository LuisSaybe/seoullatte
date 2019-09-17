import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Spinner } from 'web/js/component/spinner';
import { Avatar } from 'web/js/component/avatar';
import { EMPTY_IMAGE } from 'web/js/component/avatar';

import './style.scss';

export function AvatarImageUpload(props) {
  const input = React.createRef();
  const [ src, setSrc ] = useState(props.src);
  const [ loading, setLoading ] = useState(false);
  const onChange = e => {
    if (e.target.files.length === 1) {
      const reader = new FileReader();
      reader.onload = () => {
        setSrc(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(e.target.files[0]);
      setLoading(true);
    }

    props.onChange(e);
  };
  const onClick = () => {
    input.current.click();
  };

  const propsCopy = _.omit(props, Object.keys(AvatarImageUpload.propTypes ));
  const avatarOrLoading = loading ? <Spinner styleName='spinner' /> : <Avatar styleName='avatar' src={src} />;

  useEffect(() => {
    setSrc(props.src);
  }, [ props.src ]);

  return (
    <button className={props.className} type='button' onClick={onClick} styleName='root' { ...propsCopy }>
      <input disabled={props.disabled} id={props.id} onChange={onChange} ref={input} type='file' accept='image/*' styleName='input' />
      {avatarOrLoading}
    </button>
  );
}

AvatarImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  src: PropTypes.string,
  id: PropTypes.string,
  styleName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

AvatarImageUpload.defaultProps = {
  id: '',
  src: EMPTY_IMAGE,
  disabled: false,
};
