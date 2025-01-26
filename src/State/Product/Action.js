import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";


export const findProducts = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCTS_REQUEST });

    // console.log("reqData  ",reqData);

    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

    try {
        const {data} = await api.get(`/api/products/?category=${category}&colors=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

        // console.log("products fetched successfully ",data);
        

        // Dispatch success action with the fetched data
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        // Dispatch failure action with the error message
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
        console.error("Error fetching products:", error);
    }
};

export const findProductsById = (productId) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    try {
        const { data } = await api.get(`/api/products/id/${productId}`);

        // console.log("product fetched successfully using id ",data);

        // Dispatch success action with the fetched data
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        // Dispatch failure action with the error message
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
        console.error("Error fetching products:", error);
    }
};