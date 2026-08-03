import {INCREMENT , DECREMENT} from "./ActionType";

let initailState = {
  count: 0,
};

function CounterReducer(state = initailState, action) {
  switch (action.type) {
    case INCREMENT :
        return {
            ...state,
            count : state.count + action.payload,
        }
    case DECREMENT :
        return {
            ...state,
            count : state.count - action.payload,
        }
    case "RESET" :
        return {
            ...state,
            count : 0,
        }
    break;
    default:
      return state;
      break;
  }
}

export default CounterReducer;
