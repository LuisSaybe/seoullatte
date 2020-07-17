import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ArticleTitle } from "web/js/component/article-title";
import { Footer } from "web/js/component/footer";
import { Navigation } from "web/js/component/navigation";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import { RootState } from "web/js/redux/reducer";
import { Anchor } from "../anchor";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import { useTopics } from "web/js/hook/useTopics";
import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLElement> {
  articleTitle: React.ReactNode;
  next: string;
  previous: string;
}

export function ArticlePage(props: IInterface) {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const topics = useTopics();
  const returnToTopic = useSelector((state: RootState) =>
    topics.find((topic) => topic.path === state.userInterface.returnTo),
  );
  const { children, articleTitle, next, previous, ...rest } = props;
  const onBackClick = () => {
    dispatch(
      updateUserInterface({
        returnTo: null,
      }),
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const element = document.getElementById(location.hash.substring(1));
    element?.scrollIntoView();
  }, [location.pathname]);

  useEffect(() => {
    const keyup = (e) => {
      const hasLeftRightControls =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;

      if (!hasLeftRightControls) {
        const isLeft = e.key === "ArrowLeft";
        const isRight = e.key === "ArrowRight";

        if (isLeft || isRight) {
          dispatch(
            updateUserInterface({
              returnTo: null,
            }),
          );
        }

        if (isLeft) {
          history.push(previous);
        } else if (isRight) {
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
    <div styleName="root" {...rest}>
      <Navigation />
      <div styleName="content">
        {returnToTopic && (
          <Anchor
            onClick={onBackClick}
            to={returnToTopic.path}
            styleName="returnTo"
          >
            back to {returnToTopic.name}
          </Anchor>
        )}
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
