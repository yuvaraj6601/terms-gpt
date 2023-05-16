import store from 'store/store';
import { TEST_ACTION, GET_USER, GET_TERMS_DETAILS } from './types.utils';

export const testDispatch = (payload: object) =>
  store.dispatch({
    type: TEST_ACTION,
    payload: payload,
  });

export const setUser = (payload: object) => {
  store.dispatch({
    type: GET_USER,
    payload: payload,
  });
};

export const getTermsDetails = (payload: object) => {
  store.dispatch({
    type: GET_TERMS_DETAILS,
    payload: payload,
  });
};
