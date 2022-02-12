import * as actionTypes from './shopping-types'


export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.load_current_item,
        payload: item
    }
}

export const addToCart = (itemID) => {

    return {
        type: actionTypes.add_to_cart,
        payload: {
            id: itemID,
        },
    }
}
export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.remove_from_cart,
        payload: {
            id: itemID,
        },
    };
};

export const adjustItemQty = (itemID, qty) => {
    return {
        type: actionTypes.adjust_item_qty,
        payload: {
            id: itemID,
            qty,
        },
    };
};