import { GET_ORDERS_REQUEST,GET_ORDERS_SUCCESS,GET_ORDERS_FAILURE ,CONFIRMED_ORDER_REQUEST,CONFIRMED_ORDER_SUCCESS,CONFIRMED_ORDER_FAILURE,PLACED_ORDER_REQUEST,PLACED_ORDER_SUCCESS,PLACED_ORDER_FAILURE,DELIVERED_ORDER_REQUEST,DELIVERED_ORDER_SUCCESS,DELIVERED_ORDER_FAILURE,CANCELLED_ORDER_REQUEST,CANCELLED_ORDER_SUCCESS,CANCELLED_ORDER_FAILURE,SHIPPED_ORDER_REQUEST,SHIPPED_ORDER_SUCCESS,SHIPPED_ORDER_FAILURE,DELETED_ORDER_REQUEST,DELETED_ORDER_SUCCESS,DELETED_ORDER_FAILURE} from "./Order/ActionType"

const initialState = {
    orders:[],
    error:null,
    loading:false
}

export const adminOrderReducer=(state=initialState,action)=>{
    
    switch(action.type){
        
        case GET_ORDERS_REQUEST:
            return {...state,loading:true,error:null}

        case GET_ORDERS_SUCCESS:
            return {loading:false,orders:action.payload,error:null}

        case GET_ORDERS_FAILURE:
            return {loading:false,error:action.payload,orders:[]}

        case CONFIRMED_ORDER_REQUEST:
        case DELIVERED_ORDER_REQUEST:
        case CANCELLED_ORDER_REQUEST:
        case PLACED_ORDER_REQUEST:
            return {...state,loading:true,error:null}

        case CONFIRMED_ORDER_SUCCESS:
            return {...state,loading:false,error:null,confirmed:action.payload}
        
        case PLACED_ORDER_SUCCESS:
            return {...state,loading:false,error:null,placed:action.payload}

        case DELIVERED_ORDER_SUCCESS:
            return {...state,loading:false,error:null,delivered:action.payload}

        case CANCELLED_ORDER_SUCCESS:
            return {...state,loading:false,error:null,cancelled:action.payload}

        case CONFIRMED_ORDER_FAILURE:
        case DELIVERED_ORDER_FAILURE:
        case CANCELLED_ORDER_FAILURE:
        case PLACED_ORDER_FAILURE:
            return {...state,loading:false,error:action.payload}

        case DELETED_ORDER_REQUEST:
            return {...state,loading:true,error:null}

        case DELETED_ORDER_SUCCESS:
            return {...state,loading:false,error:null,orders:state.orders.filter(order=>order.id!==action.payload)}

        case DELETED_ORDER_FAILURE:
            return {...state,loading:false,error:action.payload}

        case SHIPPED_ORDER_REQUEST:
            return {...state,loading:true,error:null}

        case SHIPPED_ORDER_SUCCESS:
            return {...state,loading:false,error:null,shipped:action.payload}

        case SHIPPED_ORDER_FAILURE:
            return {...state,loading:false,error:action.payload}

        default:
            return state;
        
    }
}