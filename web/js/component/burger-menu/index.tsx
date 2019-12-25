import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import Menu from "react-burger-menu/lib/menus/slide";

import { useTopics } from "web/js/hook/useTopics";

import { useTranslation } from "react-i18next";
import { Anchor } from "web/js/component/anchor";
import { Hr } from "web/js/component/hr";
import {
  DispatchUserInterfaceSettingsContext,
  UserInterfaceSettingsContext,
} from "web/js/context";
import { UserInterfaceDispatchType } from "web/js/interface";
import styles from "./style.scss";

export function BurgerMenu() {
  const { t } = useTranslation();
  const topics = useTopics();
  const dispatchUserInterfaceSettings = useContext(
    DispatchUserInterfaceSettingsContext,
  );
  const { burgerMenuOpen } = useContext(UserInterfaceSettingsContext);
  const [searchValue, setSearchValue] = useState("");
  const onLinkClick = () => {
    dispatchUserInterfaceSettings({
      data: {
        burgerMenuOpen: false,
      },
      type: UserInterfaceDispatchType.MERGE,
    });
  };
  const onStateChange = (state) => {
    dispatchUserInterfaceSettings({
      data: {
        burgerMenuOpen: state.isOpen,
      },
      type: UserInterfaceDispatchType.MERGE,
    });
  };

  useEffect(() => {
    if (!burgerMenuOpen) {
      setSearchValue("");
    }
  }, [burgerMenuOpen]);

  return (
    <Menu
      isOpen={burgerMenuOpen}
      onStateChange={onStateChange}
      styleName="root"
      itemListClassName={styles["item-list"]}
      customCrossIcon={false}
      customBurgerIcon={false}
    >
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        styleName="input"
        placeholder={t("Search...")}
      />
      <Hr styleName="hr" />
      {topics
        .filter((topic) =>
          topic.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()),
        )
        .map((topic) => (
          <Anchor
            onClick={onLinkClick}
            key={topic.path}
            styleName="link"
            to={topic.path}
          >
            {topic.name}
          </Anchor>
        ))}
    </Menu>
  );
}
