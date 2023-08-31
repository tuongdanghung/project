import mongoose from "mongoose";
import { Product } from "../../interface/product/product";

const productSchema = new mongoose.Schema<Product>(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        slug: {
            type: String,
            required: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        brand: String,
        price: {
            type: Number,
            required: true,
        },
        category: String,
        quantity: {
            type: Number,
        },
        sold: {
            type: Number,
        },
        image: [
            {
                image: { type: String },
            },
        ],
        color: [{ color: { type: String } }],
        ram: [
            {
                size: { type: Number },
            },
        ],
        origin: {
            type: String,
        },
        capacity: [
            {
                size: { type: Number },
                percent: { type: Number },
            },
        ],
        rating: [{ type: mongoose.Types.ObjectId, ref: "Rating" }],
        totalRating: {
            type: Number,
            default: 0,
        },
        seller: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const ProductModel = mongoose.model<Product>("Product", productSchema);
module.exports = ProductModel;
