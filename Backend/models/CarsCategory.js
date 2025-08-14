import mongoose from "mongoose";

const CarsSchema = new mongoose.Schema({
  image: { type: Buffer, required: true },
  price: { type: Number, required: true },
  eco: { type: Number, required: true },
  year: { type: Number, required: true },
  km: { type: Number, required: true },
  model: { type: String, required: true },
  city: { type: String, required: true },
  date: { type: String, required: true }
});

export default mongoose.model("Cars", CarsSchema);
