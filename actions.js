// Task 7.4

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
      type: ADD_COMMENT,
      text,
      id: uuid.v4()
  }
}
function editComment(id,text) {
  return {
      type: EDIT_COMMENT,
      text: text,
      id: id
  }
}
function removeComment(id) {
  return {
      type: REMOVE_COMMENT,
      id: id
  }
}
function thumbUpComment(id) {
  return {
      type: THUMB_UP_COMMENT,
      id: id      
  }
}
function thumDownComment(id) {
  return {
      type: THUMB_DOWN_COMMENT,
      id: id
  }
}
const boundAddComment = text => dispatch(addComment(text));
const boundEditomment = (id,text) => dispatch(editComment(id,text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumDownComment = id => dispatch(thumDownComment(id));

boundAddComment('New comment!');
boundEditomment(123,'Changed comment');  
boundRemoveComment(123);
boundThumbUpComment(321);
boundThumDownComment(345);