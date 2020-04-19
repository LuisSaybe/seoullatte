import React, { useEffect, useState } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { useTopics } from "web/js/hook/useTopics";
import { Topic } from "web/js/interface/korean";

import { Anchor } from "web/js/component/anchor";
import { Hr } from "web/js/component/hr";
import { Input } from "web/js/component/input";
import { RootState } from "web/js/redux/reducer";
import { update } from "web/js/redux/user-interface/action";
import styles from "./style.scss";

export function BurgerMenu() {
  const { t } = useTranslation();
  const topics = useTopics();
  const dispatch = useDispatch();
  const burgerMenuOpen = useSelector<RootState>(
    (state) => state.userInterface.burgerMenuOpen,
  );
  const [searchValue, setSearchValue] = useState("");
  const onLinkClick = () => {
    dispatch(
      update({
        burgerMenuOpen: false,
      }),
    );
  };
  const onStateChange = (state) => {
    dispatch(
      update({
        burgerMenuOpen: state.isOpen,
      }),
    );
  };
  const filterTopics = (topic: Topic) => {
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
        {t("Search for a topic")}
      </label>
      <Input
        id="search-input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        styleName="input"
        placeholder={t("search...")}
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
