import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const requestCms = (url: string, token: string, params: AxiosRequestConfig) => {
  return axios.request({
    baseURL: "https://cms.englishtown.edu.vn",
    headers: {
      Authorization: "Bearer " + token,
    },
    url,
    ...params,
  });
};

export default requestCms;
