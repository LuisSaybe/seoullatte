import React, { useEffect, useRef } from "react";
import { Manager, Popper, Reference } from "react-popper";
import { useDispatch, useSelector } from "react-redux";

import { useEntry } from "../../lib/hook/useEntry";
import { useDidClickOnElement } from "../../lib/hook/useDidClickOnElement";
import { Definition } from "../definition";
import { UnstyledTextButton } from "../unstyled-text-button";
import { setRefOpen } from "../../lib/redux/definition-popup/action";
import { RootState } from "../../lib/redux/reducer";
import styles from "./index.module.scss";

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
              className={`${buttonClassname ?? ""} ${styles.text}`}
              onClick={onClick}
              ref={ref}
            >
              {children}
            </UnstyledTextButton>
          )}
        </Reference>
        {showDefinition && (
          <Popper>
            {({ ref, style, placement, arrowProps }) => (
              <div
                ref={ref}
                style={style}
                data-placement={placement}
                className={styles["popup-container"]}
              >
                <Definition
                  className={styles.popup}
                  senseIndexes={senseIndexes}
                  q={q}
                >
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
