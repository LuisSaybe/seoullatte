import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTopics } from "web/js/hook/useTopics";
import { RootState } from "web/js/redux/reducer";
import { Anchor } from "web/js/component/anchor";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import "./style.scss";

export function HamburgerMenu() {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>();
  /* TODO: figure out css only solution */
  const [menuWasEverOpened, setMenuWasEverOpened] = useState(false);
  const burgerMenuOpen = useSelector(
    (state: RootState) => state.userInterface.burgerMenuOpen,
  );
  const openClassname = burgerMenuOpen ? "open" : "";
  const topics = useTopics();
  const onLinkClick = () => {
    dispatch(
      updateUserInterface({
        burgerMenuOpen: false,
      }),
    );
  };

  useEffect(() => {
    if (burgerMenuOpen) {
      setMenuWasEverOpened(true);
    }
  }, [burgerMenuOpen]);

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
      <div styleName={`overlay ${openClassname}`} />
      <div
        ref={menuRef}
        styleName={`root ${openClassname}  ${menuWasEverOpened ? "dirty" : ""}`}
      >
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
