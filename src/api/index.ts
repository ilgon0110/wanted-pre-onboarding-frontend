import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

export const tokenApi = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

tokenApi.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    const token = localStorage.getItem("access_token");
    console.log("req interceptor 실행");
    if (!token) throw new Error("Not Valid Token");
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : null;
    config.withCredentials = true;
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    console.log(error);
    return Promise.reject(error);
  }
);
