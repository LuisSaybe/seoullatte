import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { ArticleTitle } from "../../components/article-title";
import { NextPreviousAnchors } from "../../components/next-previous-anchors";
import { DefaultLayout } from "../../components/default-layout";
import { appendLocation } from "../../lib/redux/location/action";
import styles from "./index.module.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  articleTitle: React.ReactNode;
  next?: string;
  previous?: string;
}

export function ArticlePage(props: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { children, articleTitle, next, previous, ...rest } = props;

  useEffect(() => {
    const element = document.getElementById(window.location.hash.substring(1));
    element?.scrollIntoView();
  }, [router.pathname]);

  useEffect(() => {
    const keyup = (e) => {
      const hasLeftRightControls =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;

      let nextLocation;

      if (previous && e.key === "ArrowLeft") {
        nextLocation = previous;
      } else if (next && e.key === "ArrowRight") {
        nextLocation = next;
      }

      if (!hasLeftRightControls && nextLocation) {
        router.push(nextLocation);
        dispatch(appendLocation(nextLocation));
      }
    };
    document.addEventListener("keyup", keyup);
    return () => {
      document.removeEventListener("keyup", keyup);
    };
  }, [previous, next, history]);

  return (
    <DefaultLayout {...rest}>
      <article className={styles.article}>
        <ArticleTitle>{articleTitle}</ArticleTitle>
        {props.children}
      </article>
      <NextPreviousAnchors
        className={styles.anchors}
        next={next}
        previous={previous}
      />
    </DefaultLayout>
  );
}
