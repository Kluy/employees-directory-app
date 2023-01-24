import { createStore } from 'redux';
import sheduleReducer from './components/shedule/shedule.reducer';

const store = createStore(sheduleReducer);

export default store;
