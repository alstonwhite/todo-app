import {updateTaskItem, addTaskItem, deleteTaskItem, completeTaskItem} from'../stateReact'
// import { postTaskServer } from '../ServerCall';


// jest.mock('../ServerCall')
jest.mock('../ServerCall',() => ({
  postTaskServer: jest.fn(() => ({
    _id: 99,
    title: "New task...",
    status: "new",
    body: "Add notes..."
  })),
  updateTaskServer: jest.fn()
  }));
// mock takes second arg laying out what function should do, return
// test add or something that returns an object

it('Updates the title', () => {
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
    console.log(updateTaskItem(items, items[0], 'updated title', undefined));
});

it('Updates the body', () => {
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
  console.log(updateTaskItem(items, items[0], undefined, "updated body"));
});

it('Adds new task to array', () => {
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
  console.log(addTaskItem(items));
});

it('Completes the task', () => {
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
  console.log(completeTaskItem(items, items[0]));
});