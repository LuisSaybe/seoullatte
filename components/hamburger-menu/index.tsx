import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTopics } from "../../lib/hook/useTopics";
import { RootState } from "../../lib/redux/reducer";
import { Anchor } from "../../components/anchor";
import { updateUserInterface } from "../../lib/redux/user-interface/action";
import styles from "./index.module.scss";

export function HamburgerMenu(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
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
      <div
        {...rest}
        className={`${styles.overlay} ${className ?? ""} ${
          burgerMenuOpen ? styles.open : ""
        }`}
      />
      <div
        ref={menuRef}
        className={`${styles.menu} ${burgerMenuOpen ? styles.open : ""}`}
      >
        {topics.map((topic) => (
          <Anchor
            onClick={onLinkClick}
            key={topic.paths[0]}
            className={styles.link}
            to={topic.paths[0]}
          >
            {topic.name}
          </Anchor>
        ))}
      </div>
    </>
  );
}
