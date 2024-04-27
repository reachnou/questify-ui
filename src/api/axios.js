import axios from "axios";
import { header } from "./header";

const axiosInstance = axios.create({
    baseURL: "https://questify-api.azurewebsites.net/questify/api/v1",
    timeout: 10000,
    headers: header()
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error('An API error occurred', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;