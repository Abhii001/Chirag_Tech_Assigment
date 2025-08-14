import express from 'express';
import Cars from '../models/CarsCategory.js';
import multer from 'multer';
import ImageKit from "imagekit";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const cars = await Cars.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

const upload = multer({ storage: multer.memoryStorage() });

const imagekit = new ImageKit({
    publicKey: "public_OBJKqnm4Fl6BMmSpTCA28Z8lV4g=",
    privateKey: "private_2bgQYI3c3rJOK6AsSpXD5blBBeE=",
    urlEndpoint: "https://ik.imagekit.io/naklrvhu8/"
});

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { price, eco, year, km, model, city, date } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }

        // Upload to ImageKit
        const uploadResponse = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname
        });

        const car = new Cars({
            price,
            eco,
            year,
            km,
            model,
            city,
            date,
            image: uploadResponse.url
        });

        await car.save();

        res.status(201).json({ message: "Car added successfully", car });
    } catch (error) {
        console.error("Error adding car:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
