import axios from "axios";
import {toast} from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const axiosInstance = axios.create({
    timeout: 4000,
})

axiosInstance.interceptors.request.use((config) => {
        config.withCredentials = true;
        return config;
    },
    (error) => {
        console.log("Failed Request Data", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use((response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 401) {
            toast.error("Request failed with status code 401")
        }
        if (error.response.status === 403) {
            toast.error("403 Forbidden Error")
        }
        console.log("failed to response data", error);
        return Promise.reject(error);
    },
);
export default axiosInstance