import mongoose from "mongoose";
import { Order } from "../interface/order";

const orderSchema = new mongoose.Schema<Order>({
    payment: {
        type: Number,
    },
    total: {
        type: Number,
    },
    status: {
        type: String,
        default: "Pending",
        enum: ["Cancel", "Pending", "Processing", "Delivering", "Done"],
    },
    mobile: { type: Number },
    fullName: { type: String },
    orderBy: { type: mongoose.Types.ObjectId, ref: "User" },
    product: [
        {
            product: { type: mongoose.Types.ObjectId, ref: "Product" },
            quantity: Number,
            ram: { type: Number },
            capacity: { size: { type: Number }, percent: { type: Number } },
            color: String,
            title: String,
            image: { type: String },
        },
    ],
    address: [
        {
            province: { type: String },
            district: { type: String },
            ward: { type: String },
        },
    ],
    shipping: { type: Number },
});

const OrderModel = mongoose.model<Order>("Order", orderSchema);
module.exports = OrderModel;
