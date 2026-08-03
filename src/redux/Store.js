import { createStore } from "redux";
import CounterReducer from "./CounterReducer";

let store = createStore(CounterReducer);

export default store;
