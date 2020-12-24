import React from "react";
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from "../services/mode";
import styles from "../style/index.css";

let classNames = require("classnames");
let style = classNames.bind(styles);

export default function ButtonWrapper(props) {
  const { mode, changeMode } = props;
  const isCreateMode = () => mode === MODE_CREATE;
  const isSearchMode = () => mode === MODE_SEARCH;
  let btnAddClass = style({
    "button-add": true,
    "button-add-selected": isCreateMode(),
  });
  let btnSearchSelect = style({
    "button-search": true,
    "button-search-selected": isSearchMode(),
  });
  return (
    <div data-testid="operation-menu">
      <button
        data-testid="addBtn"
        title="Add New"
        className={btnAddClass}
        onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}
      />
      <button
        data-testid="searchBtn"
        title="Search"
        className={btnSearchSelect}
        onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}
      />
    </div>
  );
}
