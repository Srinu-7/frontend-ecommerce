import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const token = localStorage.getItem('jwt');

const registerRequest =()=>({type:REGISTER_REQUEST});
const registerSuccess =(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure =(error)=>({type:REGISTER_FAILURE,payload:error});

export const register = (userData) => async (dispatch) =>{

    dispatch(registerRequest())

    try {

        const response = await axios.post(`${API_BASE_URL}/auth/signUp`,userData);

        const user = response.data;

        if(user.jwt) localStorage.setItem("jwt",user.jwt);

        dispatch(registerSuccess({ user: user, jwt: user.jwt }));
        
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
}

const loginRequest =()=>({type:LOGIN_REQUEST});
const loginSuccess =(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure =(error)=>({type:LOGIN_FAILURE,payload:error});

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signIn`, userData);
        
        // Extracting jwtToken from the response data
        const jwtToken = response.data.jwtToken; // Ensure this matches the API response structure

        // Prepare the user object to include email from userData
        const user = {
            email: userData.email,
            jwt: jwtToken // Include the JWT token
        };

        if (jwtToken) localStorage.setItem("jwt", jwtToken); // Store JWT in local storage

        // Dispatch the login success action with the user object and JWT
        dispatch(loginSuccess({ user, jwt: jwtToken }));
        
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

const getUserRequest =()=>({type:GET_USER_REQUEST});
const getUserSuccess =(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure =(error)=>({type:GET_USER_FAILURE,payload:error});

export const getUser = (jwt) => async (dispatch) =>{

    dispatch(getUserRequest())

    try {

        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization" : `Bearer ${jwt}`
            }
        });

        const user = response.data;

        dispatch(getUserSuccess(user));
        
    } catch (error) {
        dispatch(getUserFailure(error.message));
    }
}

export const logout = ()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}