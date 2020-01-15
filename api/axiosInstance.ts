import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    timeout: 10000,
});
axiosInstance.interceptors.request.use(async request => {
    request.headers = {
        'Content-Type': 'application/json',
    };
    return request;
});
export default axiosInstance;
