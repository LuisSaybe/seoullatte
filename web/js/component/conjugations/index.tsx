import React from "react";

import { useEntry } from "web/js/hook/useEntry";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
}

export function Conjugations(props: Props) {
  const { q, ...rest } = props;
  const entry = useEntry(q);

  return (
    <div {...rest}>
      {Array.from(entry.xml.querySelectorAll(":root conju_info")).map(
        (node, index) => {
          const conjugation = node.querySelector("conjugation_info conjugation")
            .textContent;
          const abbreviation = node.querySelector(
            "abbreviation_info abbreviation",
          )?.textContent;

          return (
            <React.Fragment key={conjugation}>
              {index > 0 && <>,&nbsp;</>}
              <span styleName="conjugation">
                <span>{conjugation}</span>
                {abbreviation && (
                  <>
                    &nbsp;
                    <span styleName="abbreviation">({abbreviation})</span>
                  </>
                )}
              </span>
            </React.Fragment>
          );
        },
      )}
    </div>
  );
}
