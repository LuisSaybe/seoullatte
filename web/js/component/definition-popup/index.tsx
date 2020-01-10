import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { Manager, Popper, Reference } from "react-popper";

import { useDidClickOnElement } from "web/js/hook/useDidClickOnElement";
import { IKoreanDefinitionIdentifier } from "web/js/interface/korean";

import { Definition } from "web/js/component/definition";
import "./style.scss";

type Interface = IKoreanDefinitionIdentifier &
  React.HTMLAttributes<HTMLDivElement>;

export function DefinitionPopup(props: Interface) {
  const [showDefinition, setShowDefinition] = useState(false);
  const rootRef = useRef<HTMLButtonElement>();
  const didClickOnElement = useDidClickOnElement(rootRef.current);
  const { children, q } = props;
  const onClick = () => {
    setShowDefinition(true);
  };

  useEffect(() => {
    if (didClickOnElement === false) {
      setShowDefinition(false);
    }
  }, [didClickOnElement]);

  return (
    <button ref={rootRef} styleName="root" onClick={onClick}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <div styleName="text" ref={ref}>
              {children}
            </div>
          )}
        </Reference>
        {showDefinition && (
          <Popper>
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                <Definition q={q}>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </Definition>
              </div>
            )}
          </Popper>
        )}
      </Manager>
    </button>
  );
}
