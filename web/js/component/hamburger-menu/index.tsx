import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTopics } from "web/js/hook/useTopics";
import { RootState } from "web/js/redux/reducer";
import { Anchor } from "web/js/component/anchor";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import "./style.scss";

export function HamburgerMenu(props: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>();
  const burgerMenuOpen = useSelector(
    (state: RootState) => state.userInterface.burgerMenuOpen,
  );
  const topics = useTopics();
  const onLinkClick = () => {
    dispatch(
      updateUserInterface({
        burgerMenuOpen: false,
      }),
    );
  };

  useEffect(() => {
    if (!burgerMenuOpen) {
      return;
    }

    const listener = (event) => {
      if (!menuRef.current) {
        return;
      }

      const didClickOutsideElement =
        !menuRef.current.contains(event.target) &&
        menuRef.current !== event.target;

      if (didClickOutsideElement) {
        dispatch(
          updateUserInterface({
            burgerMenuOpen: false,
          }),
        );
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [menuRef.current, burgerMenuOpen]);

  return (
    <>
      <div {...props} styleName={`overlay ${burgerMenuOpen ? "open" : ""}`} />
      <div ref={menuRef} styleName={`menu ${burgerMenuOpen ? "open" : ""}`}>
        {topics.map((topic) => (
          <Anchor
            onClick={onLinkClick}
            key={topic.paths[0]}
            styleName="link"
            to={topic.paths[0]}
          >
            {topic.name}
          </Anchor>
        ))}
      </div>
    </>
  );
}
