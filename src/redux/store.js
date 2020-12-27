import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducers/reducers'
import thunk from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
  );

// export default createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunkMiddleware)
//     );

// export default configureStore({
//     reducer: rootReducer,
//     // middleware: [thunkMiddleware]
// })