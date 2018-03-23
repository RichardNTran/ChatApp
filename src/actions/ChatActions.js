import { Actions } from 'react-native-router-flux';

import {
  LOAD_CHAT
} from './types';

export const loadChat = ({ name }) => {
  return (dispatch) => {
    console.log('load chat action');
    dispatch({ 
      type: LOAD_CHAT, payload: { prop: 'name', value: name } 
    });
    Actions.push('chat');
  }
}