import axios from 'axios';

export const getAll = async () => {
    const { data } = await axios.get('/api/comidas');
    return data;
};

export const search = async searchTerm =>{
    const { data } = await axios.get('/api/comidas/buscar/' + searchTerm);
    return data;
};

export const getAllTags = async () => {
    const { data } = await axios.get('/api/comidas/etiqueta');
    return data;
};

export const getAllByTags = async tag => {
    if (tag === 'Todo') return getAll();
    const { data } = await axios.get('/api/comidas/etiqueta/' + tag);
    return data;
};

export const getById = async foodId => {
    const { data } = await axios.get('/api/comidas/' + foodId);
    return data;
};