import axios from "axios";

export const API_BASE_URL = "http://ec2-13-60-167-22.eu-north-1.compute.amazonaws.com:8081";

const jwt = localStorage.getItem("jwt");


export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization" : `Bearer ${jwt}`,
        'Content-Type'  : "application/json"
    }
})