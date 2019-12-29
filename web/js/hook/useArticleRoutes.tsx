import React from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";

import { useOrigin } from "web/js/hook/useOrigin";
import { useTopics } from "web/js/hook/useTopics";

import { ArticlePage } from "web/js/component/article-page";
import { routes } from "web/js/routes";

export function useArticleRoutes() {
  const topics = useTopics();
  const origin = useOrigin();

  return topics.map((topic, index) => {
    const prevousTopic = topics[index - 1];
    const nextTopic = topics[index + 1];
    const component = () => (
      <ArticlePage
        articleTitle={topic.name}
        previous={prevousTopic?.path}
        next={nextTopic?.path}
      >
        <Helmet>
          <title>{topic.name}</title>
          {origin && <link rel="canonical" href={`${origin}${topic.path}`} />}
          <meta name="description" content={topic.description} />
        </Helmet>
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
