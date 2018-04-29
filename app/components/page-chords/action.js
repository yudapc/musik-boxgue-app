import apisauce from 'apisauce';

export const fetchChords = async () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const path = '/posts';
  const api = apisauce.create({
    baseURL,
    timeout: 30000
  });
  const response = await api.get(path);
  if (response.ok) {
    return response.data;
  }
  return {};
};

export default {
  fetchChords
};
