import axios from 'axios';

// Create an Axios instance with a base URL for your API
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // Change this to your actual API base URL
  // You can add default headers here if needed
});

// Generic GET request
export const getRequest = (endpoint, config = {}) => {
  // endpoint: string (e.g., '/jobs')
  // config: optional Axios config (headers, params, etc.)
  return api.get(endpoint, config);
};

// Generic POST request
export const postRequest = (endpoint, data = {}, config = {}) => {
  // data: object to send in the request body
  return api.post(endpoint, data, config);
};

// Generic PUT request
export const putRequest = (endpoint, data = {}, config = {}) => {
  return api.put(endpoint, data, config);
};

// Generic PATCH request
export const patchRequest = (endpoint, data = {}, config = {}) => {
  return api.patch(endpoint, data, config);
};

// Generic DELETE request
export const deleteRequest = (endpoint, config = {}) => {
  return api.delete(endpoint, config);
};

// Example usage (uncomment to use):
// getRequest('/jobs')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));
