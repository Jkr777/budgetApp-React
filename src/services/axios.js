import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BUDGET_APP_API
});

function setTokenHeader(token) {
  if(token) {
    axiosInstance.defaults.headers.common["x-auth"] = `${token}`; 
  } else {
    delete axiosInstance.defaults.headers.common["x-auth"];
  }
}

export { axiosInstance, setTokenHeader };