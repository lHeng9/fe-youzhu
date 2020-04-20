import { createStore,compose,combineReducers,applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';

declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const middlewares = [thunk];

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const store = createStore(combineReducers(reducer),composeEnhancers(applyMiddleware(...middlewares)))

export default store