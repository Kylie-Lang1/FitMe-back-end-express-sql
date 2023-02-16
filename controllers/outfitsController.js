// DEPENDENCIES
const express = require('express');
const outfits = express.Router();
const { 
    getAllOutfits, 
    getOutfitById, 
    createOutfit,
    updateOutfit, 
    deleteOutfit 
} = require('../queries/outfits');

// READ ROUTES
outfits.get('/', async (req, res) => {
    const allOutfits = await getAllOutfits();
    if (allOutfits){
        res.status(200).json(allOutfits);
    } else {
        res.status(500).json({ error: 'Server error' });
    }
});

outfits.get('/:id', async (req, res) => {
    const { id } = req.params;
    const outfits = await getOutfitById(id);
    if (outfits){
        res.status(200).json(outfits);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// CREATE ROUTES
outfits.post('/', async (req, res) => {
    const newOutfit = await createOutfit(req.body);
    if (newOutfit){
        res.status(200).json(newOutfit);
    } else {
        res.status(500).json({ error: 'Server error' });
    }
});

// UPDATE ROUTES
outfits.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedOutfit = await updateOutfit(id, req.body);
    if (updatedOutfit){
        res.status(200).json(updatedOutfit);
    } else {
        res.status(404).json({ error: 'Something went wrong' });
    }
});

// DELETE ROUTES
outfits.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedOutfit = await deleteOutfit(id);
    if (deletedOutfit){
        res.status(200).json(deletedOutfit);
    } else {
        res.status(404).json({ error: 'Something went wrong' });
    }
});

// EXPORT
module.exports = outfits;