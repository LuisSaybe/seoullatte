import React from "react";

import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  textBlocks?: number;
}

export function ContentLoader(props: Props) {
  const { textBlocks, ...rest } = props;
  let styleName = "root";
  let count = 1;

  if (props.hasOwnProperty("textBlocks")) {
    styleName += " text";
    count = textBlocks;
  } else {
    styleName += " title";
  }

  return (
    <>
      {Array.from(new Array(textBlocks)).map((_, index) => (
        <div {...rest} key={index} styleName={styleName} />
      ))}
    </>
  );
}
