/**
 * Fetch Data with POST
 * 
 * @param {string} url Server's request url
 * @param {Object} data Data send to server
 * @returns {Promise<T | unknown>} return response or error
 */
export const postData = async <T>(url:string, data: Object):Promise<T | unknown> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

/**
 * Fetch Data with DELETE
 * 
 * @param {string} url Server's request url
 * @param {Object} params Data send to server
 * @returns {Promise<T | unknown>} return response or error
 */
export const deleteData = async <T>(url:string, params?: Record<string, string>):Promise<T | unknown> => {
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
    return error;
  }
};

/**
 * Fetch Data with GET
 * 
 * @param {string} url Server's request url
 * @param {Object} params Data send to server
 * @returns {Promise<T | unknown>} return response or error
 */
export const getData = async <T>(url:string, params?: Record<string, string>):Promise<T> => {
  try {
    const searchParams = new URLSearchParams(params).toString();
    const response = await fetch(
      `${url}?${searchParams}`
    );
    return response.json() as T;
  } catch (error) {
    return error as T;
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