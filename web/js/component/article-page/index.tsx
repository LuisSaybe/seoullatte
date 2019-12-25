import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useTopics } from "web/js/hook/useTopics";

import { ArticleTitle } from "web/js/component/article-title";
import { Navigation } from "web/js/component/navigation";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLElement> {
  articleTitle: React.ReactNode;
  styleName?: string;
}

export function ArticlePage(props: IInterface) {
  const topics = useTopics();
  const location = useLocation();
  const { children, articleTitle, ...rest } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const topicIndex = topics.findIndex(
    (topic) => topic.path === location.pathname,
  );
  let next;
  let previous;

  if (topicIndex !== -1) {
    const previousTopic = topics[topicIndex - 1];
    const nextTopic = topics[topicIndex + 1];

    if (previousTopic) {
      previous = previousTopic.path;
    }

    if (nextTopic) {
      next = nextTopic.path;
    }
  }

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
