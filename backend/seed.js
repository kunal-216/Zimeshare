import mongoose from 'mongoose';
import ClothingItem from './models/clothingItem.js';
import dotenv from 'dotenv';

dotenv.config();

const encodeUrl = (filename,type) => {
    return `/${type}/${filename}`;
};

const clothes = [
    {
        name: "Boat Airdopes 115",
        image: encodeUrl('airdopes1.webp','airpodes'),
        price: "$19.99",
        type: "airdopes"
    },
    {
        name: "Realme Mobile 7 Pro",
        image: encodeUrl('mobile1.webp','mobile'),
        price: "$49.99",
        type: "mobile"
    },
    {
        name: "Portronics Mouse",
        image: encodeUrl('mouse1.webp','mouse'),
        price: "$12.99",
        type: "mouse"
    },
    {
        name: "Boat Speakers Stone",
        image: encodeUrl('speakers1.webp','speakers'),
        price: "$18.99",
        type: "speakers"
    },
    {
        name: "Trebel Earphones",
        image: encodeUrl('earphones1.webp','earphones'),
        price: "$14.99",
        type: "earphones"
    },
    {
        name: "Boat Airdopes 121",
        image: encodeUrl('airdopes2.webp','airpodes'),
        price: "$19.99",
        type: "airdopes"
    },
    {
        name: "LG TV 123cm",
        image: encodeUrl('TV1.webp','TV'),
        price: "$59.99",
        type: "TV"
    },
    {
        name: "Realme 9 Pro Mobile",
        image: encodeUrl('mobile2.webp','mobile'),
        price: "$39.99",
        type: "mobile"
    },
    {
        name: "Camera CP Plus",
        image: encodeUrl('camera1.jpg','camera'),
        price: "$44.99",
        type: "camera"
    },
    {
        name: "Boat Earphones 381",
        image: encodeUrl('earphones2.webp','earphones'),
        price: "$24.99",
        type: "earphones"
    },
    {
        name: "DIGITE Camera",
        image: encodeUrl('camera2.jpg','camera'),
        price: "$36.99",
        type: "camera"
    },
    {
        name: "Samsung Galaxy Mobile",
        image: encodeUrl('mobile3.webp','mobile'),
        price: "$38.99",
        type: "mobile"
    },
    {
        name: "Boat Airdopes 501",
        image: encodeUrl('airdopes3.webp','airpodes'),
        price: "$15.99",
        type: "airdopes"
    },
    {
        name: "Realme C-30 Mobile",
        image: encodeUrl('mobile4.webp','mobile'),
        price: "$33.99",
        type: "mobile"
    },
    {
        name: "Lenovo Wireless Mouse",
        image: encodeUrl('mouse2.webp','mouse'),
        price: "$8.99",
        type: "mouse",
    },
    {
        name: "Nikon Camera D780",
        image: encodeUrl('camera3.jpg','camera'),
        price: "$55.99",
        type: "camera"
    },
    {
        name: "Whirlpool Refrigerator 184",
        image: encodeUrl('fridge2.webp','refrigerator'),
        price: "$70.99",
        type: "refrigerator"
    },
    {
        name: "SJCAM Camera SJ4000",
        image: encodeUrl('camera4.jpg','camera'),
        price: "$40.99",
        type: "camera"
    },
    {
        name: "Stone Speakers",
        image: encodeUrl('speakers4.webp','speakers'),
        price: "$20.99",
        type: "speakers"
    },
    {
        name: "Sony Alpha Camera",
        image: encodeUrl("camera5.jpg",'camera'),
        price: "$69.99",
        type: "camera"
    },
    {
        name: "One Plus Airpodes",
        image: encodeUrl("airdopes6.webp",'airpodes'),
        price: "$23.99",
        type: "airpodes"
    },
    {
        name: "Lenovo Mouse",
        image: encodeUrl("mouse4.webp",'mouse'),
        price: "$6.99",
        type: "mouse"
    },
    {
        name: "Philips Refrigerator",
        image: encodeUrl("fridge4.webp",'refrigerator'),
        price: "$69.99",
        type: "refreigerator"
    },
    {
        name: "Sony Ultra Mobile",
        image: encodeUrl("mobile7.webp",'mobile'),
        price: "$39.99",
        type: "mobile"
    },
    {
        name: "Sony speakers",
        image: encodeUrl("speakers8.webp",'speakers'),
        price: "$19.99",
        type: "speakers"
    },
    {
        name: "Sony earphones",
        image: encodeUrl("earphones8.webp",'earphones'),
        price: "$39.99",
        type: "earphones"
    },
    {
        name: "One Plus TV",
        image: encodeUrl("TV5.webp",'TV'),
        price: "$59.99",
        type: "TV"
    },
    {
        name: "Apple Watch",
        image: encodeUrl("watch6.webp",'watches'),
        price: "$39.99",
        type: "watches"
    },
    {
        name: "Bose speakers",
        image: encodeUrl("speakers9.webp",'speakers'),
        price: "$21.99",
        type: "speakers"
    },
    {
        name: "Nixon Camera",
        image: encodeUrl("camera7.jpg",'camera'),
        price: "$49.99",
        type: "camera"
    },
]

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        try {
            await ClothingItem.deleteMany({});
            await ClothingItem.insertMany(clothes);
            console.log('Data inserted successfully');
        } catch (error) {
            console.error('Error inserting data:', error);
        } finally {
            mongoose.disconnect();
        }
    });
