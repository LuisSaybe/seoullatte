import React, { useContext, useEffect, useState } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import { useTranslation } from "react-i18next";

import { useTopics } from "web/js/hook/useTopics";
import { ITopic, StandardReducerOperation } from "web/js/interface";

import { Anchor } from "web/js/component/anchor";
import { Hr } from "web/js/component/hr";
import { Input } from "web/js/component/input";
import {
  DispatchUserInterfaceSettingsContext,
  UserInterfaceSettingsContext,
} from "web/js/context";
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
      type: StandardReducerOperation.MERGE,
    });
  };
  const onStateChange = (state) => {
    dispatchUserInterfaceSettings({
      data: {
        burgerMenuOpen: state.isOpen,
      },
      type: StandardReducerOperation.MERGE,
    });
  };
  const filterTopics = (topic: ITopic) => {
    const includesName = topic.name
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
    const includesSearchTerms = topic.searchTerms
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());

    return includesName || includesSearchTerms;
  };

  useEffect(() => {
    if (!burgerMenuOpen) {
      setSearchValue("");
    }
  }, [burgerMenuOpen]);

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
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        styleName="input"
        placeholder={t("Search...")}
      />
      <Hr styleName="hr" />
      {topics.filter(filterTopics).map((topic) => (
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
