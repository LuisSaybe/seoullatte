import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ArticleTitle } from "web/js/component/article-title";
import { Navigation } from "web/js/component/navigation";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLElement> {
  articleTitle: React.ReactNode;
  next: string;
  previous: string;
  styleName?: string;
}

export function ArticlePage(props: IInterface) {
  const location = useLocation();
  const { children, articleTitle, next, previous, ...rest } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div styleName="root" {...rest}>
      <Navigation />
      <div styleName="content">
        <article>
          <div>
            <ArticleTitle>{articleTitle}</ArticleTitle>
            {props.children}
          </div>
        </article>
        <NextPreviousAnchors
          styleName="anchors"
          next={next}
          previous={previous}
        ></NextPreviousAnchors>
      </div>
    </div>
  );
}
