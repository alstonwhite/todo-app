import { TODO_ADD, TODO_SELECT, TODO_UPDATE, TODO_DELETE, TODO_COMPLETE } from "./actionTypes";
import {
  postTaskServer,
  updateTaskServer,
  deleteTaskServer,
} from "../ServerCall";

const newTask = () => {
  return {
    title: "New task...",
    status: "new",
    body: "Add notes..."
  };
};

export function postNewTaskR(items) {
  console.log('redux fetch new');  
  return {type: TODO_ADD, payload: items};
}

export function addTaskR(items) {
  console.log('redux add'); 
  return function (dispatch) {
    return postTaskServer(newTask()).then(item => dispatch(postNewTaskR([...items, item])));
  } 
}

export function selectTaskR(item) {
  // console.log('redux select');   
  return {type: TODO_SELECT, payload: item}
  }

export function updateTaskR(items, item, title, body) {
  // console.log('redux update'); 
  let copyOfItem = { ...item };
  if (title !== undefined) {
    copyOfItem.title = title;
  }
  if (body !== undefined) {
    copyOfItem.body = body;
  }
  items[items.findIndex(obj => obj._id === copyOfItem._id)] = copyOfItem;
  updateTaskServer(copyOfItem);
  let nextItems = [...items];  
  return {type: TODO_UPDATE, payload: nextItems};
  }

export function deleteTaskR(items, item) {
  // console.log('redux delete'); 
  let nextItems = items.filter(i => i._id !== item._id);
  deleteTaskServer(item);
  return {type: TODO_DELETE, payload: nextItems}
  }

export function completeTaskR(items, item) {
  // console.log('redux complete');   
  let copyOfItem = { ...item };
  copyOfItem.status = "completed";
  items[items.findIndex(obj => obj._id === copyOfItem._id)] = copyOfItem;
  updateTaskServer(copyOfItem);
  let nextItems = [...items];
  return {type: TODO_COMPLETE, payload: nextItems}
  }