import React from "react";

import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import styles from "./index.module.scss";

export function DefaultLayout(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;

  return (
    <div className={`${styles.root} ${className ?? ""}`}>
      <div className={styles.content}>
        <Navigation className={styles.navigation} />
        {props.children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}
