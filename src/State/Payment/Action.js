import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

export const createPayment=(orderId)=>async(dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})
    console.log("create payment called",orderId);
    try {
        const {data} = await api.post(`/api/payments/${orderId}`);
        console.log("payment created succesfully ",data);
        if(data.paymentLinkUrl){
            window.location.href = data.paymentLinkUrl
        }
        dispatch({type:CREATE_PAYMENT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}

export const updatePayment=(paymentId,orderId)=>async(dispatch)=>{
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    console.log("update payment called",paymentId,orderId);
    try {
        const {data} = await api.get(`/api/payments/${paymentId}/${orderId}`);
        console.log("update payment sucesfully ",data);
        dispatch({type:UPDATE_PAYMENT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message})
    }
}