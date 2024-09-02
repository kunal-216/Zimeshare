import express from 'express';
import ClothingItem from '../models/clothingItem.js';
import Fuse from "fuse.js";

const router = express.Router();

const fetchAllItems = async () => {
    try {
        const items = await ClothingItem.find({});
        return items;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
};

router.get('/search', async (req, res) => {
    const query = req.query.q || '';

    try {
        if (query.length < 3) {
            const allItems = await fetchAllItems();
            return res.json(allItems);
        }

        const items = await fetchAllItems();
        const options = {
            includeScore: true,
            keys: ['name'],
            threshold: 0.4,
            distance: 200, 
        };
        
        const fuse = new Fuse(items, options);
        const result = fuse.search(query);

        const matchedItems = result.map(resultItem => resultItem.item);
        res.json(matchedItems);
    } catch (error) {
        res.status(500).json({ message: 'Error searching items', error });
    }
});

export default router;
