// DEPENDENCIES
const db = require('../db/dbConfig');

// READ QUERIES
const getAllOutfits = async () => {
    try {
        const allOutfits = await db.any('SELECT * FROM outfits');
        return allOutfits;
    } catch (error) {
        return error;
    }
};

const getOutfitById = async (id) => {
    try {
        const outfit = await db.one(
            'SELECT * FROM outfits WHERE id = $1', 
            id
        );
        return outfit;
    } catch (error) {
        return error;
    }
};

// CREATE QUERIES
const createOutfit = async (outfit) => {
    try {
        const newOutfit = await db.one(
            'INSERT INTO outfits (name, img1_url, img2_url, img3_url, img4_url, img5_url, img6_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [outfit.name, outfit.img1_url, outfit.img2_url, outfit.img3_url, outfit.img4_url, outfit.img5_url, outfit.img6_url]
        );
        return newOutfit;
    } catch (error) {
        return error;
    }
};

// UPDATE QUERIES
const updateOutfit = async (id, outfit) => { 
    try {
        const updatedOutfit = await db.one(
            'UPDATE outfits SET name = $1, img1_url = $2, img2_url = $3, img3_url = $4, img4_url = $5, img5_url = $6, img6_url = $7 WHERE id = $8 RETURNING *',
            [outfit.name, outfit.img1_url, outfit.img2_url, outfit.img3_url, outfit.img4_url, outfit.img5_url, outfit.img6_url, id]
        );
        return updatedOutfit;
    } catch (error) {
        return error;
    }
};

// DELETE QUERIES
const deleteOutfit = async (id) => {
    try {
        const deletedOutfit = await db.one(
            'DELETE FROM outfits WHERE id = $1 RETURNING *', 
            id
        );
        return deletedOutfit;
    } catch (error) {
        return error;
    }
}

// EXPORT
module.exports = {
    getAllOutfits, 
    getOutfitById, 
    createOutfit, 
    updateOutfit, 
    deleteOutfit
}