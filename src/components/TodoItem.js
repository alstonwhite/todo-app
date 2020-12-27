import React from "react";

const TodoItem = ({ item, onSelect, onDelete, onComplete }) => {
  if (item.status === "new") {
    return (
      <li>
        <button className="button task-button" onClick={() => onSelect(item)}>
          {item.title}
        </button>
        <button
          className="button button-small button-delete"
          onClick={() => onDelete(item)}
        >
          X
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <button className="button task-button" onClick={() => onSelect(item)}>
          {item.title}
        </button>
        <button className="button button-small button-complete">✔</button>
      </li>
    );
  }
};

export default TodoItem;
