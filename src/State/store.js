import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Rducer";
import { adminOrderReducer } from "./Admin/Reducer";

const rootReducers = combineReducers({
    auth   :authReducer,
    products:customerProductReducer,
    cart   :cartReducer,
    order  :orderReducer,
    adminOrder:adminOrderReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))