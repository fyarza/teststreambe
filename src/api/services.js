import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './axios.config';
import {
  HTTP_SERVER_UNAVAILABLE,
  BEARER_TOKEN_NAME,
} from '@/utils/constants/api';
import validationServices from './validation-services';
import {dlog} from '@/utils/functions';

class Api {
  async get(uri, data = null) {
    const url = `${uri}`;
    try {
      const headers = await this.getHeaders();
      dlog('-------------Get Url----------', JSON.stringify(url));
      const result = await axios.get(url, {
        headers,
        params: data,
        timeout: 50000,
      });
      dlog('-------------Response----------');
      return result.data;
    } catch (e) {
      validationServices(e.message);
      throw e;
    }
  }

  async delete(uri) {
    const url = `${uri}`;
    try {
      const headers = await this.getHeaders();
      const result = await axios.delete(url, {headers, timeout: 50000});
      return result.data;
    } catch (e) {
      validationServices(e.message);
      throw e;
    }
  }

  async put(uri, body, returnRequest = false) {
    const headers = await this.getHeaders();
    const url = `${uri}`;
    try {
      const request = await axios.put(url, body, {
        headers,
        timeout: 50000,
      });
      if (returnRequest) {
        return request;
      }
      try {
        if (request.status === 500) {
          return Promise.reject({code: HTTP_SERVER_UNAVAILABLE});
        }
        const response = await request.data;
        return response;
      } catch (e) {
        return request;
      }
    } catch (e) {
      validationServices(e.message);
      throw e;
    }
  }

  async patch(uri, body, returnRequest = false) {
    const headers = await this.getHeaders();
    const url = `${uri}`;
    try {
      const request = await axios.patch(url, body, {
        headers,
        timeout: 50000,
      });
      if (returnRequest) {
        return request;
      }
      try {
        if (request.status === 500) {
          return Promise.reject({code: HTTP_SERVER_UNAVAILABLE});
        }
        const response = await request.data;
        return response;
      } catch (e) {
        return request;
      }
    } catch (e) {
      validationServices(e.message);
      throw e;
    }
  }

  async post(uri, body, returnRequest = false, formdata = false) {
    const headers = await this.getHeaders(formdata);
    const url = `${uri}`;
    try {
      dlog('-------------Post Url----------', url);
      const request = await axios.post(url, body, {
        headers,
        timeout: 50000,
      });
      if (returnRequest) {
        return request;
      }
      try {
        if (request.status === 500) {
          return Promise.reject({code: HTTP_SERVER_UNAVAILABLE});
        }
        const response = await request.data;
        return response;
      } catch (e) {
        throw e;
      }
    } catch (e) {
      validationServices(e.message);
      throw e;
    }
  }

  async postToken(uri, body, returnRequest = false) {
    const url = `${uri}`;
    try {
      const request = await axios.post(url, body);

      try {
        if (request.status === 500) {
          return Promise.reject({code: HTTP_SERVER_UNAVAILABLE});
        }
        const response = await request.data;
        if (!response) {
          return;
        }

        if (response.success) {
          //const decoded = jwt_decode(response.usuario, {header: true});
          this.setAuthorization(response.access_token);
          return {
            usuario: response.usuario,
          };
        }

        return response;
      } catch (e) {
        dlog(e);
        return request;
      }
    } catch (e) {
      validationServices(e.message);
      throw e;
    }
  }

  async postFile(uri, body, callback) {
    const url = `${uri}`;
    const headers = await this.getHeaders();
    try {
      dlog('-------------Post Url IMAGE----------', url);
      const request = await axios.post(url, body, {
        headers,
        onUploadProgress: callback,
      });
      try {
        if (request.status === 500) {
          return Promise.reject({code: HTTP_SERVER_UNAVAILABLE});
        }
        const response = await request.data;
        return response;
      } catch (e) {
        throw e;
      }
    } catch (e) {
      validationServices(e.message);
      throw e;
    }
  }

  isJson = str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  setAuthorization = authorization => {
    try {
      AsyncStorage.setItem(BEARER_TOKEN_NAME, authorization);
    } catch (e) {}
  };

  getAuthorization = () => {
    try {
      return AsyncStorage.getItem(BEARER_TOKEN_NAME);
    } catch (e) {}

    return null;
  };

  async getHeaders(formdata = false) {
    let headers = {
      Accept: 'application/json',
      'Content-Type': formdata ? 'multipart/form-data' : 'application/json',
    };
    const authorization = await this.getAuthorization();
    if (authorization !== null) {
      headers = {...headers, Authorization: `Bearer ${authorization}`};
    }

    return headers;
  }
}

export default new Api();
