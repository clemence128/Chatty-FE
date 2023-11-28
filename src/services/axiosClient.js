import axios from "axios";
import { isProduction } from "../config";
import AuthService from "./auth.api"


const BASE_URL = isProduction() ? import.meta.env.VITE_PROD_BASE_URL : import.meta.env.VITE_DEV_BASE_URL;

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.response.use((response) => {
    return response
}, async (error) => {
    try {
        const originalRequest = error.config;
        const message = error.response.data.message;
        if(message === 'jwt expired' && !originalRequest._retry){
            originalRequest._retry = true;
            const data = await AuthService.refreshToken()
            const {token} = data.data;
            const {accessToken, refreshToken} = token;
            localStorage.setItem('access_token', accessToken)
            localStorage.setItem('refresh_token', refreshToken)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            originalRequest.headers.Authorization = 'Bearer ' + accessToken;
            return axiosClient(originalRequest);
        }

    } catch (err) {
        return Promise.reject(err);
    }
    return Promise.reject(error)
})

export default axiosClient

