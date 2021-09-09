import { createStore } from 'redux';
import UserReducer from './userReducer';

const store = createStore(UserReducer);

export const dispatcher = store.dispatch;
export default store