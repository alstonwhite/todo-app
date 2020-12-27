import React from "react";
import renderer from "react-test-renderer";
import ReactTestUtils from 'react-dom/test-utils';

import TodoItem from "../components/TodoItem";

it("Renders a list correctly (new status)", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "new",
        body: "Add notes..."
      }
    ];
    const selectTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoItem
          item={item}
          onSelect={selectTask}
          onDelete={deleteTask}
          onComplete={completeTask}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
  });

  it("Renders a list correctly (completed status)", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "completed",
        body: "Add notes..."
      }
    ];
    const selectTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoItem
          item={item}
          onSelect={selectTask}
          onDelete={deleteTask}
          onComplete={completeTask}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
  });

  it("Select task button triggers function on button click", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "completed",
        body: "Add notes..."
      }
    ];
    const selectTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoItem
          item={item}
          onSelect={selectTask}
          onDelete={deleteTask}
          onComplete={completeTask}
        />
      );
    let button = tree.root.findByProps({className:'button task-button'});
    ReactTestUtils.Simulate.click(button);
    expect(selectTask).toHaveBeenCalled();
  });

  it("Delete task button triggers function on button click", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "completed",
        body: "Add notes..."
      }
    ];
    const selectTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoItem
          item={item}
          onSelect={selectTask}
          onDelete={deleteTask}
          onComplete={completeTask}
        />
      );
    let button = tree.root.findByProps({className:'button button-small button-delete'});
    ReactTestUtils.Simulate.click(button);
    expect(deleteTask).toHaveBeenCalled();
  });

// Renders: Item with new status, item with completed status
// Task button: Calls proper fn, updates activeItem (App level)
// Delete button: Calls proper fn, removes item from list (arr length decreases) (App level), removes correct item (by ._id)