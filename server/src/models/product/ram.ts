import mongoose, { Document } from "mongoose";
import { Ram } from "../../interface/product/product";

const RamSchema = new mongoose.Schema<Ram>(
    {
        size: {
            type: Number,
            required: true,
            index: true,
        },
    },
    { timestamps: true }
);

const RamModel = mongoose.model<Ram>("Ram", RamSchema);
module.exports = RamModel;
