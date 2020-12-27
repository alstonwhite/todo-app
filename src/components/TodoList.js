import React from "react";

import TodoItem from "./TodoItem";

const TodoList = ({ items, onAdd, onSelect, onDelete, onComplete }) => {
  return (
    <div className="app-column">
      <div className="header app-header">
        <div className="app-title">To-Do App</div>
        <button
          className="button button-medium button-add"
          value="Add"
          onClick={() => onAdd()}
        >
          Add
        </button>
      </div>
      <div className="task-list">
        <ul>
          {items &&
            items.map(item => (
              <TodoItem
                key = {item._id}
                item={item !== undefined && item}
                onSelect={onSelect}
                onDelete={onDelete}
                onComplete={onComplete}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
