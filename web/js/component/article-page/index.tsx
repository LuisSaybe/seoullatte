import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ArticleTitle } from "web/js/component/article-title";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import { DefaultLayout } from "web/js/component/default-layout";
import { appendLocation } from "web/js/redux/location/action";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  articleTitle: React.ReactNode;
  next?: string;
  previous?: string;
}

export function ArticlePage(props: Props) {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { children, articleTitle, next, previous, ...rest } = props;

  useEffect(() => {
    const element = document.getElementById(location.hash.substring(1));
    element?.scrollIntoView();
  }, [location.pathname]);

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
        history.push(nextLocation);
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
      <article styleName="article">
        <ArticleTitle styleName="article-title">{articleTitle}</ArticleTitle>
        {props.children}
      </article>
      <NextPreviousAnchors
        styleName="anchors"
        next={next}
        previous={previous}
      />
    </DefaultLayout>
  );
}
