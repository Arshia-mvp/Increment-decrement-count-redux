import {
    Milk_ADD,
    Milk_REMOVE,
    Milk_RESET,
    Milk_SET_PRICE,
    Milk_TOGGLE_LOW_FAT,
} from "./MilkActionType";

let initialState = {
    count: 0,
    price: 150000,
    isLowFat: false,
};

function milkReducer(state = initialState, action) {
    switch (action.type) {
        case Milk_ADD:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case Milk_REMOVE:
            return {
                ...state,
                count: state.count - action.payload,
            };
        case Milk_SET_PRICE:
            return {
                ...state,
                price: action.payload,
            };
        case Milk_TOGGLE_LOW_FAT:
            return {
                ...state,
                isLowFat: !state.isLowFat,
            };
        case Milk_RESET:
            return initialState;
        default:
            return state;
    }
}

export default milkReducer;