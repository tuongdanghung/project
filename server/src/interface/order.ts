import mongoose from "mongoose";
// export interface CartItem {
//     product: mongoose.Types.ObjectId;
//     quantity: number;
//     color: string;
//     price: number;
//     title: string;
// }

export interface Order {
    payment: number;
    total: number;
    orderBy: any;
    status: string;
    product: any
}
