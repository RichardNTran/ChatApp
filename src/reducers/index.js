import { combineReducers } from 'redux';
import ChatReducer from './ChatReducer';

export default combineReducers({
  chatData: ChatReducer
});
