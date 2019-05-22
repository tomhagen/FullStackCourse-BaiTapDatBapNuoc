import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from "../constants";


export const actAddToOrder = (item, quantity) => {
    return {
        type: ADD_TO_ORDER,
        payload: {
            item,
            quantity
        }
    }
}

export const actRemoveFromOrder = (id) => {
    return {
        type: REMOVE_FROM_ORDER,
        payload: id
    }
}
