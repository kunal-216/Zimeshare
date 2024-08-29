import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import searchRouter from './routes/searchRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

const corsOptions = {
    origin: process.env.FRONTEND_URI,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));
app.use("/search", searchRouter);

app.get("/", (req, res) => {
    res.send("Hello There");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
