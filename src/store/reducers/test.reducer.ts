import { TEST_ACTION } from "utils/types.utils";
import { action } from 'interfaces/common.interface'

const initialState = {
  test: "test",
  foo: "bar"
};

const TestReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case TEST_ACTION:
      let newState = Object.assign({}, state)
      newState = { ...newState, ...action.payload}
      return newState
    default:
      return state;
  }
}

export default TestReducer