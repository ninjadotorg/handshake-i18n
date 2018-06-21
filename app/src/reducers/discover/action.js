import { createAPI } from '@/reducers/action';

export const ACTIONS = {
  LOAD_DISCOVER: 'LOAD_DISCOVER',
  LOAD_DISCOVER_DETAIL: 'LOAD_DISCOVER_DETAIL',
  UPDATE_OFFER_STATUS: 'UPDATE_OFFER_STATUS',
};

export const loadDiscoverList = createAPI(ACTIONS.LOAD_DISCOVER);
export const loadDiscoverDetail = createAPI(ACTIONS.LOAD_DISCOVER_DETAIL);
export const success = data => ({ type: `${ACTIONS.LOAD_DISCOVER}_SUCCESS`, payload: data });
export const updateOfferStatus = data => ({ type: ACTIONS.UPDATE_OFFER_STATUS, payload: data });
