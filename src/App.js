import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import "./styles.css";

import store from './redux/store'
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import {getTasksServer} from "./ServerCall";
import {updateTaskItem, addTaskItem, deleteTaskItem, completeTaskItem} from './state';
import {addTaskR, selectTaskR, updateTaskR, deleteTaskR, completeTaskR} from './redux/actions';

export default function App() {
  // const [items, setItems] = useState(undefined);
  // const [activeItem, setActiveItem] = useState(undefined);
  const itemsR = useSelector(state => state.items);
  const activeItemR = useSelector(state => state.activeItem);
  const dispatch = useDispatch();
  // const state = store.getState();

  async function addTask() {
    // const nextItems = await addTaskItem(items);
    // setItems(nextItems);
    dispatch(addTaskR(itemsR));
  }

  function selectTask(item) {
    // setActiveItem(item);
    dispatch(selectTaskR(item));
  }

  function updateTask(item, title, body) {
    // const nextItems = updateTaskItem(items, item, title, body);
    // setActiveItem(nextItems.find(obj => obj._id === item._id));
    // setItems(nextItems);
    dispatch(updateTaskR(itemsR, item, title, body));
    dispatch(selectTaskR(itemsR.find(obj => obj._id === item._id)));
  }

  function deleteTask(item) {
    // const nextItems = deleteTaskItem(items, item);
    // setItems(nextItems);
    // setActiveItem(nextItems[0]);
    dispatch(deleteTaskR(itemsR, item));
    dispatch(selectTaskR(itemsR[0]));
  }

  function completeTask(item) {
    // const nextItems = completeTaskItem(items, item)
    // setItems(nextItems);
    dispatch(completeTaskR(itemsR, item));
  }

  useEffect(() => {
      getTasksServer().then(tasks => {
        // setItems(tasks);
        dispatch(updateTaskR(tasks));
        // setActiveItem(tasks[0]);
        dispatch(selectTaskR(tasks[0])); 
      });
    }, []);

  return (
    <div className="wrapper">
      <TodoList
        // items={items}
        items={itemsR}
        onAdd={addTask}
        onSelect={selectTask}
        onDelete={deleteTask}
      />
      <TodoDetail
        // active={activeItem}
        active={activeItemR}
        onUpdateTask={updateTask}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
