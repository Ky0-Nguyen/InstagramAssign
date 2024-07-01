import {get} from 'lodash';
import axios, {Method, AxiosInstance, AxiosRequestConfig} from 'axios';
import {HTTP_STATUS} from './http-status';

export interface PropsParams {
  actionURL: string;
  headers: any;
  method: Method;
  dataBody: any;
  timeout?: number;
  params?: any;
}

const axiosApiInstance: AxiosInstance = axios.create();

const BASE_URL = 'https://instagram-scraper-api2.p.rapidapi.com/';

axiosApiInstance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    config.headers = {
      'x-rapidapi-key': 'd90ab6e5c2msh86a20af331400e6p1985bajsn2bbcc52fb8ed',
      'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    config.timeout = 5000;
    config.baseURL = BASE_URL;
    return config;
  },
  (error: {config?: any; response?: any; message?: any}) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axiosApiInstance(originalRequest);
    }
    handleError(error);
    return Promise.reject(error);
  },
);
const handleError = async (error: {
  config?: any;
  response?: any;
  message?: any;
}) => {
  let result;
  let data;
  const {response} = error;
  console.log('error', response);

  if (response) {
    data = await get(response, 'data');
    switch (response.status) {
      case HTTP_STATUS.notFound.code:
        result = {...HTTP_STATUS.notFound, data};
        break;
      case HTTP_STATUS.forbidden.code:
        result = {...HTTP_STATUS.forbidden, data};
        break;
      case HTTP_STATUS.unauthorized.code:
        // handle logout
        return {...HTTP_STATUS.unauthorized, data};
      case HTTP_STATUS.badRequest.code:
        result = {...HTTP_STATUS.badRequest, data};
        break;
      case HTTP_STATUS.upgradeRequired.code:
        result = {...HTTP_STATUS.upgradeRequired, data};
        break;
      case HTTP_STATUS.notAcceptable.code:
        // handle error
        return {...HTTP_STATUS.notAcceptable};
      default:
        result = {message: 'server error', data};
        break;
    }
  } else {
    result = {message: error.message, data};
  }
  return result;
};
class BaseAPI {
  public get = (actionURL: string, config?: AxiosRequestConfig) => {
    return axiosApiInstance.get(actionURL, config);
  };

  public post = (
    actionURL: string,
    bodyRequest?: any,
    config?: AxiosRequestConfig,
  ) => {
    return axiosApiInstance.post(actionURL, bodyRequest, config);
  };

  public put = (
    actionURL: string,
    bodyRequest?: any,
    config?: AxiosRequestConfig,
  ) => {
    return axiosApiInstance.put(actionURL, bodyRequest, config);
  };

  public delete = (actionURL: string, config?: AxiosRequestConfig) => {
    return axiosApiInstance.delete(actionURL, config);
  };
}

const instance = new BaseAPI();
export {instance as BaseAPI};
