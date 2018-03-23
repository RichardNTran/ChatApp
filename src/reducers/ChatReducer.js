import {
  LOAD_CHAT
} from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default (state= INITIAL_STATE, action) => {

  switch (action.type) {
    case LOAD_CHAT:
      console.log('chapter reducer');
      return {...state, [action.payload.prop]: action.payload.value}; 
    default:
      return state;
  }
}