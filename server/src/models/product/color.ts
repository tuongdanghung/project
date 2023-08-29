import mongoose, { Document } from "mongoose";
import { Color } from "../../interface/product/product";

const ColorSchema = new mongoose.Schema<Color>(
    {
        color: {
            type: String,
            required: true,
            index: true,
        },
    },
    { timestamps: true }
);

const ColorModel = mongoose.model<Color>("Color", ColorSchema);
module.exports = ColorModel;
