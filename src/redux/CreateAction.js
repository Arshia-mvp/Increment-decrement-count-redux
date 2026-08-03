import { INCREMENT , DECREMENT } from "./ActionType";

export let increment = (payload) => {
    return {
        type : INCREMENT,
        payload,
    };
};

export let decrement = (payload) => {
    return {
        type : DECREMENT,
        payload,
    };
};