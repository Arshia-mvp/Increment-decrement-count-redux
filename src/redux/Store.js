import { combineReducers, createStore } from "redux";
import CounterReducer from "./counter/CounterReducer";
import milkReducer from "./milk/MilkReducer";

let rootReducer = combineReducers({
  counter: CounterReducer,
  milk : milkReducer,
});

let store = createStore(rootReducer);
import { createStore } from "redux";
import CounterReducer from "./CounterReducer";

let store = createStore(CounterReducer);

export default store;
