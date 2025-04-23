import { message as messageTip } from "antd";
import confirm from "antd/es/modal/confirm";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_LIBRARY_API_URL,
  timeout: 5000
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // 请求时开启进度条
    nProgress.start();
    // 发送请求前在请求头部加上token
    /*
    if (store.getState().user.token) {
      config.headers['X-Token'] = getToken();
    }
    */
    return config;
  },
  error => {
    // 处理请求异常
    console.log(error);
    // 异常时关闭进度条
    nProgress.done();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<Result>) => {
    // 相应成功关闭进度条
    nProgress.done();
    const { code, data, message } = response.data;
    // if the custom code is not 20000, it is judged as an error
    if (code !== 20000) {
      messageTip.error({
        content: message || 'Error',
        duration: 3
      });
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (code === 50008 || code === 50012 || code === 50014) {
        confirm({
          title: "Confirm logout",
          content: "You have been logged out, you can cancel to stay on this page, or log in again",
          okText: "Re-Login",
          cancelText: "Cancel",
          onOk: () => {
            //store.dispatch(resetToken());
            location.reload();
          }
        })
      }
      return Promise.reject(new Error(message || 'Error'));
    } else {
      return data;
    }
  },
  error => {
    console.log("err" + error);
    // 异常时关闭进度条
    nProgress.done();
    messageTip.error({
      content: error.message,
      duration: 3
    });
    return Promise.reject(error);
  }
);

class ApiClient {
  get<T = any>(config:AxiosRequestConfig):Promise<T> {
    return this.request({...config, method:"GET"});
  }

  post<T = any>(config:AxiosRequestConfig):Promise<T> {
    return this.request({...config, method:"POST"});
  }

  put<T = any>(config:AxiosRequestConfig):Promise<T> {
    return this.request({...config, method:"PUT"});
  }

  delete<T = any>(config:AxiosRequestConfig):Promise<T> {
    return this.request({...config, method:"DELETE"});
  }

  request<T = any>(config:AxiosRequestConfig):Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res:AxiosResponse<Result>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e:Error | AxiosError) => {
          reject(e);
        })
    })
  }
}

export default new ApiClient();