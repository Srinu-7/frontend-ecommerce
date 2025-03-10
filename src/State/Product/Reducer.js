import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null
}


export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, loading: true, error: null }
        case FIND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }
        case DELETE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, deletedProductId: action.payload }
        case CREATE_PRODUCT_SUCCESS:
            console.log('Current State:', state);
            console.log('Action Payload:', action.payload);
            return { ...state, loading: false, error: null, products: [...state.products, action.payload] }
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case CREATE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}