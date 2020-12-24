import React from "react";
import CheckBox from "./CheckBox";
import classNames from "classnames";

const TodoItem = ({ data, changeStatus }) => {
  const handleChange = (todoStatus) => changeStatus(data.id, todoStatus);
  return (
    <li
      data-testid="todo-item"
      className={classNames({
        "todo-item ui-state-default": true,
        completed: data.completed,
        pending: !data.completed,
      })}
    >
      <div className="checkbox">
        <label>
          <CheckBox checked={data.completed} onChange={handleChange} />{" "}
          {data.text}
        </label>
      </div>
    </li>
  );
};

export default TodoItem;
