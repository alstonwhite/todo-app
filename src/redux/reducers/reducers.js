// import {getTasksServer} from ".../ServerCall";
import { TODO_ADD, TODO_SELECT, TODO_UPDATE, TODO_DELETE, TODO_COMPLETE } from '../actionTypes';

const initState = {
    items: [
        {id: 1, 
        title: "New task...",
        status: "new",
        body: "Add notes..."}
    ],
    //getTasksServer().then(tasks =>
    activeItem: []
    // todos[0]
}

// needs to be async function w/ await for each case? -- use Thunk
export default (state = initState, action) => {
    switch (action.type){
        case TODO_ADD:
        case TODO_UPDATE:
            return {...state, items: action.payload};
        case TODO_SELECT:
            return {...state, activeItem: action.payload};
        // case TODO_UPDATE:
        //     return {...state, items: action.payload.items};
            // return {...state,  updateTaskItem(state.items, state.activeItem, action.payload.title, action.payload.body)};
        case TODO_DELETE:
            return {...state, items: action.payload};
            // return {...state, todos: deleteTaskItem(state.items, state.activeItem)};
        case TODO_COMPLETE:
            return {...state, items: action.payload};
            // return {...state, todos: completeTaskItem(state.items, state.activeItem)};
        default:
            return state;
    };
}

// alternately (redux toolkit) -- 
// const addTodo = createAction('TODO_ADD')
// const deleteTodo = createAction('TODO_DELETE')
// etc

// const todoList = createReducer(initState, {
//   [addTodo]: state => ({...state, todos: addTaskItem(state.items)}),
//   [deleteTodo]: state => ({...state, todos: deleteTaskItem(state.items, state.activeItem)}),
//   etc
// })
