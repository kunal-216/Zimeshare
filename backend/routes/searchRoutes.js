import express from 'express';
import ClothingItem from '../models/clothingItem.js';

const router = express.Router();

router.get('/items', async (req, res) => {
    try {
        const items = await ClothingItem.find({});
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});

router.get('/search', async (req, res) => {
    const query = req.query.q || '';
    try {
        const items = await ClothingItem.find({
            name: { $regex: query, $options: 'i' }
        });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error searching items', error });
    }
});

export default router;
