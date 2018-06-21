import Comment from '@/models/Comment';
import { ACTIONS } from './action';

const handleListPayload = payload => payload.data.items.reverse().map(comment => Comment.comment(comment));
const handleCreateCommentPayload = payload => Comment.comment(payload.data);

const commentReducer = (state = {
  list: [],
  detail: {},
  isFetching: false,
}, action) => {
  switch (action.type) {
    // List
    case ACTIONS.LOAD_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case `${ACTIONS.LOAD_COMMENTS}_SUCCESS`:
      return {
        ...state,
        isFetching: false,
        list: handleListPayload(action.payload),
      };
    case `${ACTIONS.LOAD_COMMENTS}_FAILED`:
      return {
        ...state,
        isFetching: false,
      };
    // create comment
    case ACTIONS.CREATE_COMMENT:
      return {
        ...state,
        isFetching: true,
      };
    case `${ACTIONS.CREATE_COMMENT}_SUCCESS`:
      return {
        ...state,
        isFetching: false,
        list: state.list.concat(handleCreateCommentPayload(action.payload)),
      };
    case `${ACTIONS.CREATE_COMMENT}_FAILED`:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default commentReducer;
