import React from "react";
import renderer from "react-test-renderer";
import ReactTestUtils from 'react-dom/test-utils';

import TodoDetail from "../components/TodoDetail";

it("Renders a task correctly", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "new",
        body: "Add notes..."
      }
    ];
    const updateTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoDetail
          active={item}
          onUpdateTask={updateTask}
          onComplete={completeTask}
          onDelete={deleteTask}
          />
      );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("Complete task button triggers function on button click", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "completed",
        body: "Add notes..."
      }
    ];
    const updateTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoDetail
          active={item}
          onUpdateTask={updateTask}
          onComplete={completeTask}
          onDelete={deleteTask}
          />
      );
    let button = tree.root.findByProps({className:'button button-large button-complete'});
    ReactTestUtils.Simulate.click(button);
    expect(completeTask).toHaveBeenCalled();
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
    const updateTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoDetail
          active={item}
          onUpdateTask={updateTask}
          onComplete={completeTask}
          onDelete={deleteTask}
          />
      );
    let button = tree.root.findByProps({className:'button button-large button-delete'});
    ReactTestUtils.Simulate.click(button);
    expect(deleteTask).toHaveBeenCalled();
  });

  it("Title input triggers function on change", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "completed",
        body: "Add notes..."
      }
    ];
    const updateTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoDetail
          active={item}
          onUpdateTask={updateTask}
          onComplete={completeTask}
          onDelete={deleteTask}
          />
      );
    let button = tree.root.findByProps({className:'title-input'});
    ReactTestUtils.Simulate.change(button);
    expect(updateTask).toHaveBeenCalled();
  });

  it("Body textarea triggers function on change", () => {
    const item = [
      {
        _id: 1,
        title: "New task...",
        status: "completed",
        body: "Add notes..."
      }
    ];
    const updateTask = jest.fn();
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tree = renderer
      .create(
        <TodoDetail
          active={item}
          onUpdateTask={updateTask}
          onComplete={completeTask}
          onDelete={deleteTask}
          />
      );
    let button = tree.root.findByProps({className:'body-text'});
    ReactTestUtils.Simulate.change(button);
    expect(updateTask).toHaveBeenCalled();
  });



// Renders: Item (with new/completed status?)
// Complete button: Calls proper fn
// Delete button: Calls proper fn
// Title input: Calls proper fn
// Body input: Calls proper fn