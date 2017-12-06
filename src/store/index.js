import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, applyMiddleware(thunk, createLogger()));

export default store;