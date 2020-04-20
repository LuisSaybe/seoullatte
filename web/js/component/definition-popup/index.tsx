import React, { useEffect, useRef, useState } from "react";
import { Manager, Popper, Reference } from "react-popper";

import { useDidClickOnElement } from "web/js/hook/useDidClickOnElement";
import {
  DefinitionDisplayOptions,
  KoreanDefinitionIdentifier,
} from "web/js/interface/korean";
import { Definition } from "web/js/component/definition";
import { UnstyledTextButton } from "web/js/component/unstyled-text-button";
import "./style.scss";

type Props = KoreanDefinitionIdentifier &
  DefinitionDisplayOptions &
  React.HTMLAttributes<HTMLDivElement>;

export function DefinitionPopup(props: Props) {
  const [showDefinition, setShowDefinition] = useState(false);
  const rootRef = useRef();
  const didClickOnElement = useDidClickOnElement(rootRef.current);
  const { children, q, senseIndexes } = props;
  const onClick = () => {
    setShowDefinition(!showDefinition);
  };

  useEffect(() => {
    if (didClickOnElement === false) {
      setShowDefinition(false);
    }
  }, [didClickOnElement]);

  return (
    <span ref={rootRef}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <UnstyledTextButton onClick={onClick} styleName="text" ref={ref}>
              {children}
            </UnstyledTextButton>
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
    </span>
  );
}
