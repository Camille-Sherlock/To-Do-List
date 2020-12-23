import React from "react";
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from "../services/mode";

let classNames = require("classnames");

export default function ButtonWrapper(props) {
  const { mode, changeMode } = props;
  const isCreateMode = () => mode === MODE_CREATE;
  const isSearchMode = () => mode === MODE_SEARCH;
  let btnAddClass = classNames({
    "button-add": true,
    "button-add-selected": isCreateMode(),
  });
  let btnSearchSelect = classNames({
    "button-search": true,
    "button-search-selected": isSearchMode(),
  });
  return (
    <div data-testid="operation-menu">
      <button
        data-testid="addBtn"
        title="Add New"
        classname={btnAddClass}
        onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}
      />
      <button
        data-testid="searchBtn"
        title="Search"
        classname={btnSearchSelect}
        onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}
      />
    </div>
  );
}
