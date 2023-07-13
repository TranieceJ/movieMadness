/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  /**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */

async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
        return null;
      }
  
      const payload = await response.json();
  
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
}

export async function createUser(user, signal){
    const url = `${API_BASE_URL}/users`;
    const options = {
      method: "POST",
      headers,
      body:  JSON.stringify({ data: user }),
      signal,
    };

    return await fetchJson(url,options, user)
}

export async function listWatchLists(user_id, signal) {
    const url = new URL(`${API_BASE_URL}/users/${user_id}`);
    return await fetchJson(url, {headers, signal}, [])
}

export async function listAllWatchLists(signal) {
    const url = new URL(`${API_BASE_URL}/users`);
    return await fetchJson(url, {headers, signal}, [])
}