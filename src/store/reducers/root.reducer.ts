import { combineReducers } from 'redux';
import testReducer from 'store/reducers/test.reducer';

export default combineReducers({
  test: testReducer,
});
