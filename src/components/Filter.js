import React from "react";
import { filterOptions } from "../services/filter";
import classNames from "classnames";

export default function Filter(props) {
  const { filter: selectedFilter, changeFilter } = props;

  return (
    <ul className="filters list-unstyled clearfix">
      {Object.keys(filterOptions).map((key) => (
        <li className="filler-item" key={key}>
          <button
            onClick={() => changeFilter(key)}
            className={classNames({
              selected: key === selectedFilter,
            })}
          >
            {filterOptions[key]}
          </button>
        </li>
      ))}
    </ul>
  );
}
