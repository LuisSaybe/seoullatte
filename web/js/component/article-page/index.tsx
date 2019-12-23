import React from "react";
import { useLocation } from "react-router-dom";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import { useTopics } from "web/js/hook/useTopics";
import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLElement> {
  articleTitle: React.ReactNode;
  styleName?: string;
}

export function ArticlePage(props: IInterface) {
  const topics = useTopics();
  const location = useLocation();
  const { children, articleTitle, ...rest } = props;

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
    <article {...rest} styleName="root">
      <div>
        <ArticleTitle styleName="title">{articleTitle}</ArticleTitle>
        {props.children}
      </div>
      <NextPreviousAnchors
        styleName="anchors"
        next={next}
        previous={previous}
      ></NextPreviousAnchors>
    </article>
  );
}
