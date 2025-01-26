import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
import { api } from "../../config/apiConfig";


export const getCart = () => async(dispatch) => {

    dispatch({ type: GET_CART_REQUEST });

    try {
        const {data} = await api.get("/api/cart/");
        dispatch({ type: GET_CART_SUCCESS, payload: data }); // Dispatch success action
    } catch (error) {
        console.error("Error adding item to cart:", error); // Log the error
        dispatch({ type: GET_CART_FAILURE, payload: error.message }); // Dispatch failure action
    }
}



export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
        const {data} = await api.put("/api/cart/add", reqData);
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data}); // Dispatch success action
        // console.log("item succesfully added to cart ",data);
    } catch (error) {
        console.error("Error adding item to cart:", error); // Log the error
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message }); // Dispatch failure action
    }
}

export const removeCartItem = (cartItemId) => async (dispatch) => {

    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
        const {data} = await api.delete(`/api/cart/${cartItemId}/delete`);
        // console.log("item removed successfully ",data);
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data }); // Dispatch success action
    } catch (error) {
        console.error("Error adding item to cart:", error); // Log the error
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message }); // Dispatch failure action
    }
}

export const updateCartItem = (id,quantity)=>async(dispatch)=>{
    console.log("id and quantity ",id,quantity);
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    try {
        const {data} = await api.put(`/api/cart/update/${id}/${quantity}`);
        // console.log("item updated successfully ",data);
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data}); // Dispatch success action
    } catch (error) {
        console.error("Error adding item to cart:", error); // Log the error
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message }); // Dispatch failure action
    }
}