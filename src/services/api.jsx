import axios from 'axios';

axios.defaults.baseURL = 'https://63c554d5e1292e5bea2098d9.mockapi.io';
export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
export const getMaterials = async () => {
  const response = await axios.get('/materials');
  return response.data;
};

export const deleteMaterials = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};
export const updateMaterials = async fields => {
  const response = await axios.put(`/materials/${fields.id}`, fields);
  return response.data;
};
