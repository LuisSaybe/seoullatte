import React, { useContext, useEffect, useState } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import { useTranslation } from "react-i18next";

import { useTopics } from "web/js/hook/useTopics";
import { ITopic } from "web/js/interface/korean";
import { Operation } from "web/js/interface/reducer";

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
      type: Operation.MERGE,
    });
  };
  const onStateChange = (state) => {
    dispatchUserInterfaceSettings({
      data: {
        burgerMenuOpen: state.isOpen,
      },
      type: Operation.MERGE,
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
      <label htmlFor="search-input" styleName="label">
        {t("search for a topic")}
      </label>
      <Input
        id="search-input"
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
