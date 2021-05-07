import store from "store/store"
import { TEST_ACTION } from "./types.utils";

export const testDispatch = (payload: object) => (
  store.dispatch({
      type: TEST_ACTION,
      payload: payload
}));
