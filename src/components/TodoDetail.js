import React from "react";

const TodoDetail = ({ active, onUpdateTask, onComplete, onDelete }) => {
  return (
    <div className="app-column">
      <div className="header task-header">
        <input
          className="title-input"
          type="text"
          value={active ? active.title : ""}
          onChange={event => onUpdateTask(active, event.target.value)}
        />
        <button
          className="button button-large button-complete"
          onClick={() => onComplete(active)}
        >
          Complete
        </button>{" "}
        <button
          className="button button-large button-delete"
          onClick={() => onDelete(active)}
        >
          Remove
        </button>{" "}
      </div>
      <div className="task-body">
        <textarea
          className="body-text"
          type="text"
          value={active ? active.body : ""}
          onChange={event =>
            onUpdateTask(active, undefined, event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default TodoDetail;
