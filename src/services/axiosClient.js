import axios from "axios";
import { isProduction } from "../config";

const BASE_URL = isProduction() ? import.meta.env.VITE_PROD_BASE_URL : import.meta.env.VITE_DEV_BASE_URL;

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosClient

