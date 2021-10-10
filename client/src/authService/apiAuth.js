import axios from './axiosInstance';

export const getToken = () => {
    return axios.get("/token");
};












