import mongoose, { Document } from "mongoose";
import { Category } from "../../interface/category";

const categorySchema = new mongoose.Schema<Category>(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
    },
    { timestamps: true }
);

const CategoryModel = mongoose.model<Category>("Category", categorySchema);
module.exports = CategoryModel;
