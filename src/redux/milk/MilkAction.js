import {
    Milk_ADD,
    Milk_REMOVE,
    Milk_RESET,
    Milk_SET_PRICE,
    Milk_TOGGLE_LOW_FAT,
} from "./MilkActionType";

export let addMilk = (mount = 1) => {
    return {
        type : Milk_ADD,
        payload : mount,
    };
};

export let removeMilk = (mount = 1) => {
    return {
        type : Milk_REMOVE,
        payload : mount,
    };
};

export let setMilkPrice = (newPrice) => {
    return {
        type : Milk_SET_PRICE,
        payload : newPrice,
    };
};

export let toggleLowFat = () => {
    return {
        type : Milk_TOGGLE_LOW_FAT,
    };
};

export let resetMilk = () => {
    return {
        type : Milk_RESET,
    };
};