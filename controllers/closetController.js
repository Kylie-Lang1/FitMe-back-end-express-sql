// DEPENDENCIES
const express = require('express');
const closet = express.Router();
const { 
    getAllClothes, 
    getClothesById, 
    createClothes, 
    updateClothes, 
    deleteClothes 
} = require('../queries/clothes');

// READ ROUTES
closet.get('/', async (req, res) => {
    const allClothes = await getAllClothes();

    if (allClothes){
        res.status(200).json(allClothes);
    } else {
        res.status(500).json({ error: 'Server error' });
    }
});

closet.get('/:id', async (req, res) => {
    const { id } = req.params;
    const clothes = await getClothesById(id);
    if (clothes){
        res.status(200).json(clothes);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// CREATE ROUTES
closet.post('/', async (req, res) => {
    const newClothes = await createClothes(req.body);
    if (newClothes){
        res.status(200).json(newClothes);
    } else {
        res.status(500).json({ error: 'Server error' });
    }
});

// UPDATE ROUTES
closet.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedClothes = await updateClothes(id, req.body);
    if (updatedClothes){
        res.status(200).json(updatedClothes);
    } else {
        res.status(404).json({ error: 'Something went wrong' });
    }
});

// DELETE ROUTES
closet.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedClothes = await deleteClothes(id);
    if (deletedClothes){
        res.status(200).json(deletedClothes);
    } else {
        res.status(404).json({ error: 'Something went wrong' });
    }
});

// EXPORT
module.exports = closet;