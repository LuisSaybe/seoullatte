import React from "react";
import { Route } from "react-router-dom";

import { useTopics } from "web/js/hook/useTopics";

import { ArticlePage } from "web/js/component/article-page";
import { routes } from "web/js/routes";

export function useArticleRoutes() {
  const topics = useTopics();

  return topics.map((topic, index) => {
    const prevousTopic = topics[index - 1];
    const nextTopic = topics[index + 1];
    const component = () => (
      <ArticlePage
        articleTitle={topic.name}
        previous={prevousTopic?.path}
        next={nextTopic?.path}
      >
        <topic.component />
      </ArticlePage>
    );

    return (
      <Route
        exact
        key={topic.path}
        path={index === 0 ? [topic.path, routes.landing()] : topic.path}
        component={component}
      />
    );
  });
}
