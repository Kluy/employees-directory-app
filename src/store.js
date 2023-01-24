import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sheduleReducer from './components/shedule/shedule.reducer';

const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  shedule: sheduleReducer,
});

const store = createStore(
  sheduleReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
export default store;
