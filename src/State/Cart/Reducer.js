import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

// Initial state of the cart
const initialState = {
  cart: null,          // Holds the cart data (if any)
  loading: false,      // Indicates whether a request is in progress
  error: null,         // Holds any error messages
  cartItems:[],       // Array of items currently in the cart
};

// Cart reducer function to handle actions related to the cart
export const cartReducer = (state = initialState, action) => {

  // console.log(state.cartItems);

  switch(action.type){
    
    case ADD_ITEM_TO_CART_REQUEST:
      return {...state,loading:true,error:null};
    
    case ADD_ITEM_TO_CART_SUCCESS:
      return {...state,cartItems:[...state.cartItems,action.payload.cartItems],loading:false};

    case ADD_ITEM_TO_CART_FAILURE:
      return {...state,loading:false,error:action.payload};

    case GET_CART_REQUEST:
      return {...state,loading:true,error:null}

    case GET_CART_SUCCESS:
      return {...state,cartItems:action.payload.cartItems,cart:action.payload,loading:false};

    case GET_CART_FAILURE:
      return {...state,error:action.payload,loading:false};

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return {...state,loading:true,error:null}

    case REMOVE_CART_ITEM_SUCCESS:
      return {...state,cartItems:state.cartItems.filter((item) => item.id !== action.payload.id),loading:false};

    case UPDATE_CART_ITEM_SUCCESS:
      return {...state,cartItems:state.cartItems.map((item) => item.id === action.payload.id ? action.payload : item),loading:false};

    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return {...state,error:action.payload,loading:false};

    default:
      return state;
  }

};
