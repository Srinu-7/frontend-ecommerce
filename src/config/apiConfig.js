import axios from "axios";

export const API_BASE_URL = "https://e-commerce-backend-production-4ef0.up.railway.app";
// export const API_BASE_URL = "http://localhost:8080";


const jwt = localStorage.getItem("jwt");


export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization" : `Bearer ${jwt}`,
        'Content-Type'  : "application/json"
    }
})