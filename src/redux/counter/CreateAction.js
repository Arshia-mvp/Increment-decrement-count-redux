import { INCREMENT, DECREMENT } from "./ActionType";

export let increment = (mount = 1) => {
  return {
    type: INCREMENT,
    payload : mount,
  };
};

export let decrement = (mount = 1) => {
  return {
    type: DECREMENT,
    payload : mount,
  };
};