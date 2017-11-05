import {
  ADD_COMMENT,
  EDIT_COMMENT, 
  REMOVE_COMMENT, 
  THUMB_UP_COMMENT, 
  THUMB_DOWN_COMMENT  
} from './actions'

function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
      }];
    case EDIT_COMMENT:
      return [{
        id: action.id,
        text: action.text
      }];
    case THUMB_UP_COMMENT: 
      return [{
        id: action.id,
        votes: votes + 1,
        img_src: action.img
      }];
    case THUMB_DOWN_COMMENT:
      return [{
        id: action.id,
        votes: votes - 1,
        img_src: action.img
      }];
    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });
    default:
      return state;
  }
}