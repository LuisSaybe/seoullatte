import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { ArticleTitle } from "web/js/component/article-title";
import { Footer } from "web/js/component/footer";
import { Navigation } from "web/js/component/navigation";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLElement> {
  articleTitle: React.ReactNode;
  next: string;
  previous: string;
}

export function ArticlePage(props: IInterface) {
  const location = useLocation();
  const history = useHistory();
  const { children, articleTitle, next, previous, ...rest } = props;
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (next) {
        history.push(next);
      }
    },
    onSwipedRight: () => {
      if (previous) {
        history.push(previous);
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const keyup = (e) => {
      const hasLeftRightControls =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;

      if (!hasLeftRightControls) {
        if (e.key === "ArrowLeft") {
          history.push(previous);
        } else if (e.key === "ArrowRight") {
          history.push(next);
        }
      }
    };
    document.addEventListener("keyup", keyup);
    return () => {
      document.removeEventListener("keyup", keyup);
    };
  }, [previous, next, history]);

  return (
    <div styleName="root" {...handlers} {...rest}>
      <Navigation />
      <div styleName="content">
        <article>
          <ArticleTitle>{articleTitle}</ArticleTitle>
          {props.children}
        </article>
        <div>
          <NextPreviousAnchors
            styleName="anchors"
            next={next}
            previous={previous}
          />
          <Footer styleName="footer" />
        </div>
      </div>
    </div>
  );
}
