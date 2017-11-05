// Task 7.4

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
    comments,
    users
});


/*
const initialState = {
  comments: [],
  users: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: 0
          }
        , ...state]
      })
    default:
    return state;
  }
}
*/