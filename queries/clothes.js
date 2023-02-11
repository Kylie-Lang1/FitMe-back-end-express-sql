// DEPENDENCIES
const db = require('../db/dbConfig');

// READ QUERIES
const getAllClothes = async () => {
    try {
        const allClothes = await db.any('SELECT * FROM clothes');
        return allClothes;
    } catch (error) {
        return error;
    }
};

const getClothesById = async (id) => {
    try {
        const clothes = await db.one(
            'SELECT * FROM clothes WHERE id = $1', 
            id
        );
        return clothes;
    } catch (error) {
        return error;
    }
};

// CREATE QUERIES
const createClothes = async (clothes) => {
    try {
        const newClothes = await db.one(
            'INSERT INTO clothes (name, brand, category, shop_url, img_url, is_favorite, is_owned, is_selected) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [clothes.name, clothes.brand, clothes.category, clothes.shop_url, clothes.img_url, clothes.is_favorite, clothes.is_owned, clothes.is_selected]
        );
        return newClothes;
    } catch (error) {
        return error;
    }
};

// UPDATE QUERIES
const updateClothes = async (id, clothes) => { 
    try {
        const updatedClothes = await db.one(
            'UPDATE clothes SET name = $1, brand = $2, category = $3, shop_url = $4, img_url = $5, is_favorite = $6, is_owned = $7, is_selected = $8 WHERE id = $9 RETURNING *',
            [clothes.name, clothes.brand, clothes.category, clothes.shop_url, clothes.img_url, clothes.is_favorite, clothes.is_owned, clothes.is_selected, id]
        );
        return updatedClothes;
    } catch (error) {
        return error;
    }
};

// DELETE QUERIES
const deleteClothes = async (id) => {
    try {
        const deletedClothes = await db.one(
            'DELETE FROM clothes WHERE id = $1 RETURNING *', 
            id
        );
        return deletedClothes;
    } catch (error) {
        return error;
    }
}

// EXPORT
module.exports = {
    getAllClothes, 
    getClothesById, 
    createClothes, 
    updateClothes, 
    deleteClothes
}