import React from "react";
import renderer from "react-test-renderer";

import App from "../App";

const addTask = jest.fn();
const selectTask = jest.fn();
const deleteTask = jest.fn();
const updateTask = jest.fn();
const completeTask = jest.fn();

it("Renders correctly (no items)", () => {
  const items = [];
  const tree = renderer
  .create(
    <App
      items={items}
      onAdd={addTask}
      onSelect={selectTask}
      onDelete={deleteTask}
      active={items[0]}
      onUpdateTask={updateTask}
      onComplete={completeTask}
    />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it("Renders correctly (nmultiple items)", () => {
  const items = [
    {
      _id: 1,
      title: "New task...",
      status: "new",
      body: "Add notes..."
    },
    {
      _id: 2,
      title: "New task...",
      status: "new",
      body: "Add notes..."
    },
    {
      _id: 3,
      title: "New task...",
      status: "new",
      body: "Add notes..."
    }
  ];
  const tree = renderer
  .create(
    <App
      items={items}
      onAdd={addTask}
      onSelect={selectTask}
      onDelete={deleteTask}
      active={items[0]}
      onUpdateTask={updateTask}
      onComplete={completeTask}
    />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});


// Select task updates activeItem
// Delete buttons removes item from list (arr length decreases)
// Delete buttons removes correct item (by ._id)
// Delete buttons for active item sets first item as active
// Complete button 

// Key error with ul / li ??
