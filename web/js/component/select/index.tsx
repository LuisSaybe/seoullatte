import React from "react";

import "./style.scss";

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} styleName="root" />;
}
