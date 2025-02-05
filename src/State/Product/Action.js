import { api } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";


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

export const createProduct = (productRequest) => async (dispatch) => {

    dispatch({ type: CREATE_PRODUCT_REQUEST });

    console.log("productRequest  ",productRequest);

    try {
        const {data} = await api.post("/api/admin/products/",productRequest);

        console.log("product created successfully ",data);
        
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
        console.error("Error creating product:", error);
    }
};

export const deleteProduct = (productId) => async (dispatch) => {

    dispatch({ type: DELETE_PRODUCT_REQUEST });

    try {
        const {data} = await api.delete(`/api/admin/products/${productId}/delete`);

        console.log("product deleted successfully ",data);
        
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
        console.error("Error deleting product:", error);
    }
};