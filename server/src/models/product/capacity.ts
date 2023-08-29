import mongoose, { Document } from "mongoose";
import { Capacity } from "../../interface/product/product";

const CapacitySchema = new mongoose.Schema<Capacity>(
    {
        size: {
            type: Number,
            required: true,
            index: true,
        },
    },
    { timestamps: true }
);

const CapacityModel = mongoose.model<Capacity>("Capacity", CapacitySchema);
module.exports = CapacityModel;
