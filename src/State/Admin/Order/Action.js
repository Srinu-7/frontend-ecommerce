import { api } from "../../../config/apiConfig";
import { GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,CONFIRMED_ORDER_REQUEST,CONFIRMED_ORDER_SUCCESS,CONFIRMED_ORDER_FAILURE,PLACED_ORDER_REQUEST,PLACED_ORDER_SUCCESS,PLACED_ORDER_FAILURE,DELIVERED_ORDER_REQUEST,DELIVERED_ORDER_SUCCESS,DELIVERED_ORDER_FAILURE,CANCELLED_ORDER_REQUEST,CANCELLED_ORDER_SUCCESS,CANCELLED_ORDER_FAILURE,SHIPPED_ORDER_REQUEST,SHIPPED_ORDER_SUCCESS,SHIPPED_ORDER_FAILURE,DELETED_ORDER_REQUEST,DELETED_ORDER_SUCCESS,DELETED_ORDER_FAILURE} from "./ActionType";




export const getOrders=()=>async(dispatch)=>{
    dispatch({type:GET_ORDERS_REQUEST});
    try{    
        const {data} = await api.get("/api/admin/orders/");
        console.log("orders fetched successfully ",data);
        dispatch({type:GET_ORDERS_SUCCESS,payload:data});
    }catch(error){
        console.log("catch error",error);
        dispatch({type:GET_ORDERS_FAILURE,payload:error.message});
    }                   
}

export const confirmOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:CONFIRMED_ORDER_REQUEST});
    try{    
        const {data} = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        console.log("order confirmed successfully ",data);
        dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:data});
    }catch(error){
        console.log("catch error",error);
        dispatch({type:CONFIRMED_ORDER_FAILURE,payload:error.message});
    }                   
}
export const deliveredOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:DELIVERED_ORDER_REQUEST});
    try{    
        const {data} = await api.put(`/api/admin/orders/${orderId}/delivered`);
        console.log("order delivered successfully ",data);
        dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data});
    }catch(error){
        console.log("catch error",error);
        dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message});
    }                   
}

export const cancelledOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:CANCELLED_ORDER_REQUEST});
    try{    
        const {data} = await api.put(`/api/admin/orders/${orderId}/cancelled`);
        console.log("order cancelled successfully ",data);
        dispatch({type:CANCELLED_ORDER_SUCCESS,payload:data});
    }catch(error){
        console.log("catch error",error);
        dispatch({type:CANCELLED_ORDER_FAILURE,payload:error.message});
    }                   
}

export const shipOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:SHIPPED_ORDER_REQUEST});
    try{    
        const {data} = await api.put(`/api/admin/orders/${orderId}/shipped`);
        console.log("order shipped successfully ",data);
        dispatch({type:SHIPPED_ORDER_SUCCESS,payload:data});
    }catch(error){
        console.log("catch error",error);
        dispatch({type:SHIPPED_ORDER_FAILURE,payload:error.message});
    }                   
}

export const deleteOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:DELETED_ORDER_REQUEST});
    console.log("after dispatch request ",orderId);
    try{   
        console.log("before dispatch success ",orderId) 
        const {data} = await api.delete(`/api/admin/orders/${orderId}/deleted`);
        console.log("order deleted successfully ",data);
        dispatch({type:DELETED_ORDER_SUCCESS,payload:orderId});
    }catch(error){
        console.log("catch error",error);
        dispatch({type:DELETED_ORDER_FAILURE,payload:error.message});
    }                   
}