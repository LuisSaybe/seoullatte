import React from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import { useDispatch, useSelector } from "react-redux";

import { useTopics } from "web/js/hook/useTopics";
import { Anchor } from "web/js/component/anchor";
import { RootState } from "web/js/redux/reducer";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import styles from "./style.scss";

export function BurgerMenu() {
  const topics = useTopics();
  const dispatch = useDispatch();
  const burgerMenuOpen = useSelector<RootState>(
    (state) => state.userInterface.burgerMenuOpen,
  );
  const onLinkClick = () => {
    dispatch(
      updateUserInterface({
        burgerMenuOpen: false,
      }),
    );
  };
  const onStateChange = (state) => {
    dispatch(
      updateUserInterface({
        burgerMenuOpen: state.isOpen,
      }),
    );
  };

  return (
    <Menu
      disableAutoFocus
      isOpen={burgerMenuOpen}
      onStateChange={onStateChange}
      styleName="root"
      itemListClassName={styles["item-list"]}
      customCrossIcon={false}
      customBurgerIcon={false}
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
    </Menu>
  );
}
