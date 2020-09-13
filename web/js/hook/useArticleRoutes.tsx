import React, { useMemo, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";

import { useTopics } from "web/js/hook/useTopics";
import { ArticlePage } from "web/js/component/article-page";
import { LoadingArticle } from "web/js/component/loading-article";

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
            previous={prevousTopic?.paths[0]}
            next={nextTopic?.paths[0]}
          >
            <Helmet>
              <title>{topic.name}</title>
              <link rel="canonical" href={window.location.href} />
              <meta name="description" content={topic.description} />
              <meta property="og:title" content={topic.name} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:description" content={topic.description} />
            </Helmet>
            <Suspense fallback={<LoadingArticle />}>
              <topic.component />
            </Suspense>
          </ArticlePage>
        );

        return (
          <Route
            exact
            key={topic.paths[0]}
            path={topic.paths}
            component={component}
          />
        );
      }),
    [topics, origin],
  );
}
