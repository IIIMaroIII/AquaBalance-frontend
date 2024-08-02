export const axiosResponseError = error => {
  return error.response ? error.response.data.message : error.response.message;
};
