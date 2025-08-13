import express from 'express';
import Bikes from '../models/bikesCategory.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const bikes = await Bikes.find();
        res.json(bikes);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

router.post("/", async (req, res) => {
    const car = new Bikes(req.body);
    await car.save();
    res.json({ message: "Bike added successfully", car });
});

export default router;
