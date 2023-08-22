import axios from 'axios';

export const getUser = () =>
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

export const login = async (email, password) => {
  const { data } = await axios.post('api/usuarios/login', { email, password });
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const register = async registerData => {
  const { data } = await axios.post('api/usuarios/registrar', registerData);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};