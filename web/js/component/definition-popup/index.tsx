import React, { useEffect, useRef } from "react";
import { Manager, Popper, Reference } from "react-popper";
import { useDispatch, useSelector } from "react-redux";

import { useEntry } from "web/js/hook/useEntry";
import { useDidClickOnElement } from "web/js/hook/useDidClickOnElement";
import { Definition } from "web/js/component/definition";
import { UnstyledTextButton } from "web/js/component/unstyled-text-button";
import { setRefOpen } from "web/js/redux/definition-popup/action";
import { RootState } from "web/js/redux/reducer";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  q: string;
  senseIndexes?: number[];
  buttonClassname?: string;
}

export function DefinitionPopup(props: Props) {
  const dispatch = useDispatch();
  const rootRef = useRef();
  const showDefinition = useSelector((state: RootState) =>
    state.definitionPopup.openElements.has(rootRef.current),
  );
  const didClickOnElement = useDidClickOnElement(rootRef.current);
  const { buttonClassname, children, q, senseIndexes, ...rest } = props;
  const onClick = () => {
    dispatch(setRefOpen(rootRef.current, false));
  };

  /* prefetch the dictionary entry to avoid loading time */
  useEntry(q);

  useEffect(() => {
    return () => {
      dispatch(setRefOpen(rootRef.current, false));
    };
  }, [rootRef.current]);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (didClickOnElement === true && !showDefinition) {
      dispatch(setRefOpen(rootRef.current, true));
    }

    if (didClickOnElement === false && showDefinition) {
      dispatch(setRefOpen(rootRef.current, false));
    }
  }, [didClickOnElement, showDefinition, rootRef.current]);

  return (
    <span {...rest} ref={rootRef}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <UnstyledTextButton
              className={buttonClassname ?? ""}
              onClick={onClick}
              styleName="text"
              ref={ref}
            >
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
