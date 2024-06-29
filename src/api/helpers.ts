import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_CGAME_API_URL;


/**
 * Fetch Data with POST
 * 
 * @param {string} url Server's request url
 * @param {Object} data Data send to server
 * @returns {Promise<T | unknown>} return response or error
 */
export const postData = async <T,P>(url:string, data: P):Promise<T> => {
  try {
    const response = await axios.post(url, data);
    return response as T;
  } catch (error) {
    return error as T;
  }
};

/**
 * Fetch Data with DELETE
 * 
 * @param {string} url Server's request url
 * @param {Object} params Data send to server
 * @returns {Promise<T | unknown>} return response or error
 */
export const deleteData = async <T>(url:string, params?: Record<string, string>):Promise<T> => {
  try {
    const searchParams = new URLSearchParams(params).toString();
    const response = await fetch(
      `${url}?${searchParams}`,
      {
        method: "DELETE",
      }
    );
    return response.json() as Promise<T>;
  } catch (error) {
    return error as T;
  }
};

/**
 * Fetch Data with DELETE
 * 
 * @param {string} url Server's request url
 * @param {Object} params Data send to server
 * @returns {Promise<T | unknown>} return response or error
 */
export const putData = async <T,P>(url:string, data: P):Promise<T> => {
  try {
    const response = await axios.put(url, data);
    return response as T;
  } catch (error) {
    return error as T;
  }
};

/**
 * Fetch Data with GET
 * 
 * @param {string} url Server's request url
 * @param {Object} params Data send to server
 * @returns {Promise<T | unknown>} return response or error
 */
export const getData = async <T>(url:string, params?: Record<string, string>):Promise<T | unknown> => {
  try {
    const response = await axios.get(url, {
      params: params
    });
    return response as T;
  } catch (error) {
    return error;
  }
};

let fakeCache:{
  [property: string]: boolean,
} = {};
export const fakeNetWork = async (key:string = '') => {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) return;
  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  })
}