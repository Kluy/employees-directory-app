import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import employeesReducer from './reducers/shedule.reducer';

const logger = state => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  employees: employeesReducer,
});

const store = createStore(employeesReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
