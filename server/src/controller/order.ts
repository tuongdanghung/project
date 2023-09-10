const UserModel = require("../models/user");
const OrderModel = require("../models/order");
const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const createOrder = asyncHandler(async (req: any, res: Response) => {
    const { _id } = req.user;
    const { address, shipping } = req.body;
    const userCart = await UserModel.findById(_id)
        .select("cart")
        .populate("cart.product", "title price image");
    const product = userCart?.cart?.map((el: any) => ({
        product: el.product._id,
        title: el.product.title,
        price: el.product.price,
        ram: el.ram,
        quantity: el.quantity,
        color: el.color,
        capacity: el.capacity,
        image: el.product.image[0].image,
    }));
    let total = 0;
    if (userCart?.cart) {
        total = userCart.cart.reduce(
            (sum: any, el: any) =>
                el.product.price * el.quantity * el.capacity.percent + sum,
            0
        );
    }
    const createData = {
        product,
        total,
        orderBy: _id,
        address,
        shipping: shipping * 2,
    };
    const response = await OrderModel.create(createData);
    if (res.status(200)) {
        await UserModel.findByIdAndUpdate(_id, { $set: { cart: [] } });
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : "Can not order",
        });
    }
});
// create order

const getOrder = asyncHandler(async (req: any, res: Response) => {
    const { _id } = req.user;
    const response = await OrderModel.find({ orderBy: _id });
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not order",
    });
});
// get Order

const getOrderbyAdmin = asyncHandler(async (req: Request, res: Response) => {
    const response = await OrderModel.find();
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not order",
    });
});
// get Order by Admin

const updatedStatusOrder = asyncHandler(async (req: Request, res: Response) => {
    const { oid } = req.params;
    const { status } = req.body;
    if (!status) throw new Error("missing status");
    const response = await OrderModel.findByIdAndUpdate(
        oid,
        { status },
        { new: true }
    );
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not order",
    });
});
// update status order

module.exports = {
    createOrder,
    getOrderbyAdmin,
    updatedStatusOrder,
    getOrder,
};
