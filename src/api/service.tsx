import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import CONFIG from '@/utils/env_variable';

import type * as Types from '../types';

const REQUEST = (config: Types.Api.Service.httpConfig) => {
  const HTTP = axios.create({
    baseURL: CONFIG.API_URL,
  });

  // for request
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  HTTP.interceptors.request.use((request: AxiosRequestConfig<any>) => {
    request.url = '';
    request.headers = {};

    // url
    request.url = request.baseURL + config.url;

    // header
    request.headers = {
      'content-type': 'application/json',
    };

    request.data = config.data;
    request.method = config.method;

    return request;
  });

  // for response
  HTTP.interceptors.response.use(
    response => {
      if (response?.status === 200 || response?.status === 201) {
        return response;
      }
    },
    error => {
      if (error?.response?.status === 401) {
        return { data: { status: false, message: 'Session Expire', statusCode: 401 } };
      }

      return (
        error?.response || { data: { status: false, message: 'Something went wrong', data: {} } }
      );
    },
  );
  return HTTP('');
};

export default REQUEST;
