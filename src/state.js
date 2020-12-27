import {
    getTasksServer,
    postTaskServer,
    updateTaskServer,
    deleteTaskServer,
  } from "./ServerCall";

const newTask = () => {
  return {
    title: "New task...",
    status: "new",
    body: "Add notes..."
  };
};

export function updateTaskItem(items, item, title, body) {
  let copyOfItem = { ...item };
  if (title !== undefined) {
    copyOfItem.title = title;
  }
  if (body !== undefined) {
    copyOfItem.body = body;
  }
  items[items.findIndex(obj => obj._id === copyOfItem._id)] = copyOfItem;
  updateTaskServer(copyOfItem);
  return [...items];
}

// export function addTaskItem(items, callback) {
//   let nextItems = [];
//   postTaskServer(newTask()).then(item => {nextItems = [...items, item];
//   callback(nextItems)});
// }
// async function with callback

export async function addTaskItem(items) {
  const nextItems = await postTaskServer(newTask()).then(item => [...items, item]);
  return nextItems;
}

export function deleteTaskItem(items, item) {
  let nextItems = items.filter(i => i._id !== item._id);
  deleteTaskServer(item);
  return nextItems;
}

export function completeTaskItem(items, item) {
  let copyOfItem = { ...item };
  copyOfItem.status = "completed";
  items[items.findIndex(obj => obj._id === copyOfItem._id)] = copyOfItem;
  updateTaskServer(copyOfItem);
  return [...items];
}