import axios from 'axios';
import CONFIG from '@/config';

const customAxios = axios.create({
  baseURL: CONFIG.urlApi,
  timeout: 10000,
});

const requestHandler = request => {
  return request;
};

const responseHandler = response => {
  return response;
};

const errorHandler = error => {
  if (error.response.status === 401) {
    console.log('Remover Credenciales');
  }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error),
);

customAxios.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default customAxios;
