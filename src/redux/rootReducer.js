import { combineReducers } from "redux";
import shop_reducer from "./shopping/shop-reducer";

const rootReducer = combineReducers({
    shop: shop_reducer
});

export default rootReducer;

