import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = (url: string, token: string, params: AxiosRequestConfig) => {
  return axios.request({
    baseURL: "https://erp.englishtown.edu.vn",
    headers: {
      Authorization: "Bearer " + token,
    },
    url,
    ...params,
  });
};

export default request;
