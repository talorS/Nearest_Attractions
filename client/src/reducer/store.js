import { combineReducers,createStore, compose } from 'redux'
import user from './userReducer'
import counter from './counterReducer'

const rootReducer = combineReducers({
  user,
  counter
});

const middleware = compose( window.devToolsExtension && window.devToolsExtension())

export const store = createStore(rootReducer,middleware);