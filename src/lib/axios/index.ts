import Axios from "axios";
import { axiosConstant } from "@common/constants";

const baseURL = axiosConstant.getBaseUrl();

// axios 싱글톤 패턴으로 호출시마다 필요되는 로직과
// 추후 api 라이브러리 변경시 수정하여야 하는 로직을 최소하였습니다.

export const axios = Axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const http = {
  get: function get<Response = unknown>(url: string, params?: any) {
    return axios.get<Response>(url, params && params).then((res) => res.data);
  },
  post: function post<Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) {
    return axios.post<Response>(url, data).then((res) => res.data);
  },
  delete: function axiosDelete<Response = unknown>(url: string, params?: any) {
    return axios
      .delete<Response>(url, params && params)
      .then((res) => res.data);
  },
  patch: function patch<Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) {
    return axios.patch<Response>(url, data).then((res) => res.data);
  },
};
export default http;
