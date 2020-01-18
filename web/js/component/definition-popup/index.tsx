import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { Manager, Popper, Reference } from "react-popper";

import { useDidClickOnElement } from "web/js/hook/useDidClickOnElement";
import {
  IDefinitionDisplayOptions,
  IKoreanDefinitionIdentifier,
} from "web/js/interface/korean";

import { Definition } from "web/js/component/definition";
import "./style.scss";

type Interface = IKoreanDefinitionIdentifier &
  IDefinitionDisplayOptions &
  React.HTMLAttributes<HTMLDivElement>;

export function DefinitionPopup(props: Interface) {
  const [showDefinition, setShowDefinition] = useState(false);
  const rootRef = useRef<HTMLButtonElement>();
  const didClickOnElement = useDidClickOnElement(rootRef.current);
  const { children, q, senseIndexes } = props;
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
            <span styleName="text" ref={ref}>
              {children}
            </span>
          )}
        </Reference>
        {showDefinition && (
          <Popper>
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                <Definition styleName="popup" senseIndexes={senseIndexes} q={q}>
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
