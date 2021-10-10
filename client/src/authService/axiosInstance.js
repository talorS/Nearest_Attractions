import axios from 'axios';

const instance = axios.create({
  /*'http://localhost:8080/api'*/
  baseURL: 'https://nearestattractions.herokuapp.com/api',
  headers: {
    "content-type": "application/json"
  },
  responseType: "json"
});

instance.interceptors.request.use(
  request => {
    const token = localStorage.getItem("token");
    request.headers = { ...request.headers, "x-access-token": token };
    return request;
  }, error => {
    return Promise.reject(error);
  });

  export default instance;
