import mongoose from "mongoose";

const ClothingItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
    type: {type: String, required: true},
})

const ClothingItem = mongoose.model('ClothingItem', ClothingItemSchema);
export default ClothingItem