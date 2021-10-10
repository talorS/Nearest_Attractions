import axios from './axiosInstance';

export const getAttractions = (latitude,longitude) => {
    return axios.get(`/attractions?longitude=${longitude}&latitude=${latitude}`);
};

export const getAttractionTypes = () => {
    return axios.get('/attractions/type');
};











