const { sample_foods, sample_tags } = require("../data");

export const getAll = async () => sample_foods;

export const search = async searchTerm =>
    sample_foods.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

export const getAllTags = async () => sample_tags;

export const getAllByTags = async tag => {
    if (tag === 'Todo') return getAll();
    return sample_foods.filter(item => item.tags?.includes(tag));
}