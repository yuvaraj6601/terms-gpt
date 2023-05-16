import { GET_TERMS_DETAILS } from 'utils/types.utils';
import { storeAction } from 'interfaces/common.interface';

const initialState = {};

const TermsReducer = (state = initialState, action: storeAction) => {
  switch (action.type) {
    case GET_TERMS_DETAILS:
      let newState = { ...state };
      newState = { ...newState, ...action.payload };
      return newState;
    default:
      return state;
  }
};

export default TermsReducer;
