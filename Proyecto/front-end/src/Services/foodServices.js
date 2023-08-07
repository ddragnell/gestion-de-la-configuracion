const { sample_foods } = require("../data");

export const getAll = async () => sample_foods;

export const search = async searchTerm =>
    sample_foods.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );