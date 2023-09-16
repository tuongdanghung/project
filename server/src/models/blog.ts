import mongoose, { Document } from "mongoose";
import { BLog } from "../interface/blog";

const blogSchema = new mongoose.Schema<BLog>(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

const BrandModel = mongoose.model<BLog>("BLog", blogSchema);
module.exports = BrandModel;
