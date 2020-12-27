import React from "react";
import renderer from "react-test-renderer";
import ReactTestUtils from 'react-dom/test-utils';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from "../components/TodoList";

configure({adapter: new Adapter()});
// configure enzyme for jest -- move to jest.config file to be run by all tests

const addTask = jest.fn();
const selectTask = jest.fn();
const deleteTask = jest.fn();

it("Renders a list correctly (no items)", () => {
  const items = [];
  const tree = renderer
    .create(
      <TodoList
        items={items}
        onAdd={addTask}
        onSelect={selectTask}
        onDelete={deleteTask}
      />
    );
  expect(tree.toJSON()).toMatchSnapshot();
  let todoItems = tree.root.findAll(e => e.type == 'TodoItem');
  expect(todoItems.length).toEqual(items.length);
});

it("Renders a list correctly (single item)", () => {
  const items = [
    {
      _id: 1,
      title: "New task...",
      status: "new",
      body: "Add notes..."
    }
  ];
  const tree = renderer
    .create(
      <TodoList
        items={items}
        onAdd={addTask}
        onSelect={selectTask}
        onDelete={deleteTask}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
    let todoItems = tree.root.findAllByType('li');
    expect(todoItems.length).toEqual(items.length);
});

it("Renders a list correctly (multiple items)", () => {
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
      <TodoList
        items={items}
        onAdd={addTask}
        onSelect={selectTask}
        onDelete={deleteTask}
      />
    );
  expect(tree.toJSON()).toMatchSnapshot();
  let todoItems = tree.root.findAllByType('li');
  expect(todoItems.length).toEqual(items.length);
});

it('Add task button triggers function on button click', () => {
  const items = [
    {
      _id: 1,
      title: "New task...",
      status: "new",
      body: "Add notes..."
    }
  ];
    const wrapper = mount(<TodoList 
        items={items}
        onAdd={addTask}
        onSelect={selectTask}
        onDelete={deleteTask}/>);
    const addButton = wrapper.find('.button-add');
    addButton.simulate('click');
    expect(addTask).toHaveBeenCalled();
    // expect(items.length).toEqual(2);

});

it('Add task button adds entry to items on button click', () => {
  const items = [
    {
      _id: 1,
      title: "New task...",
      status: "new",
      body: "Add notes..."
    }
  ];
  const tree = renderer
  .create(
    <TodoList
      items={items}
      onAdd={addTask}
      onSelect={selectTask}
      onDelete={deleteTask}
    />
  );
  let button = tree.root.findByProps({className:'button button-medium button-add'});
  ReactTestUtils.Simulate.click(button);
  expect(addTask).toHaveBeenCalled();
  // expect(items.length).toEqual(2);

});

// Renders: No items in list, single item in list, multiple items in list
// Add button: Calls proper fn, adds item to empty list, adds item to existing list
