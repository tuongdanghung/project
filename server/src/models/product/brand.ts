import mongoose, { Document } from "mongoose";
import { Brand } from "../../interface/brand";

const brandSchema = new mongoose.Schema<Brand>(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
    },
    { timestamps: true }
);

const BrandModel = mongoose.model<Brand>("Brand", brandSchema);
module.exports = BrandModel;
