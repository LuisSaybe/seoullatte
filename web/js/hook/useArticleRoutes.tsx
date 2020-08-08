import React, { useMemo, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";

import { useTopics } from "web/js/hook/useTopics";
import { ArticlePage } from "web/js/component/article-page";
import { routes } from "web/js/routes";

export function useArticleRoutes() {
  const topics = useTopics();

  return useMemo(
    () =>
      topics.map((topic, index) => {
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
              <link rel="canonical" href={window.location.href} />
              <meta name="description" content={topic.description} />
              <meta property="og:title" content={topic.name} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:description" content={topic.description} />
            </Helmet>
            <Suspense fallback={null}>
              <topic.component />
            </Suspense>
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
      }),
    [topics, origin],
  );
}
