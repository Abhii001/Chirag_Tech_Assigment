import express from 'express';
import Cars from '../models/CarsCategory.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const cars = await Cars.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

router.post("/", async (req, res) => {
    const car = new Cars(req.body);
    await car.save();
    res.json({ message: "Car added successfully", car });
});

export default router;
