import { BASE_API } from '@/constants';
import { createAPI } from '@/reducers/action';

export const ACTIONS = {
  LOAD_COMMENTS: 'LOAD_COMMENTS',
  CREATE_COMMENT: 'CREATE_COMMENT',
  GET_COMMENT_COUNT_BY_ID: 'GET_COMMENT_COUNT_BY_ID',
};

export const loadCommentList = createAPI(ACTIONS.LOAD_COMMENTS);
export const createComment = createAPI(ACTIONS.CREATE_COMMENT);
export const getCommentCountById = createAPI(ACTIONS.GET_COMMENT_COUNT_BY_ID);
export const success = data => ({ type: `${ACTIONS.LOAD_COMMENTS}_SUCCESS`, payload: data });
