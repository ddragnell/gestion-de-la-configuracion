import axios from 'axios';

export const createOrder = async order => {
  try {
    const { data } = axios.post('/api/ordenes/create', order);
    return data;
  } catch (error) {}
};