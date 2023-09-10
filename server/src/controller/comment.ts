const ProductModel = require("../models/product/product");
const OrderModel = require("../models/order");
const CommentModel = require("../models/comment");
const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const createComment = asyncHandler(async (req: any, res: Response) => {
    const { _id } = req.user;
    const { star, comment, product } = req.body;
    const checkOrder = await OrderModel.findOne({ orderBy: _id });
    const checkComment = await CommentModel.findOne({
        product: product,
    });
    const checkUserComment = await CommentModel.findOne({
        user: _id,
    });
    if (checkOrder === null) {
        return res.status(200).json({
            success: false,
            message: "Haven't purchased yet",
        });
    }
    if (checkComment !== null && checkUserComment !== null) {
        const checkComment = await CommentModel.findOne({ product: product });
        const response = await CommentModel.findByIdAndUpdate(
            checkUserComment._id,
            { star, comment, user: _id, product },
            { new: true }
        );
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : "Can not comment",
        });
    } else {
        const response = await CommentModel.create({ ...req.body, user: _id });
        const id = response._id;
        console.log(product);
        await ProductModel.updateOne(
            { _id: product },
            { $push: { rating: id } } // Dùng $set để thêm trường và giá trị mới
        );
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : "Can not comment",
        });
    }
});
// create order

const deleteComment = asyncHandler(async (req: any, res: Response) => {
    const { cid } = req.params;
    const response = await CommentModel.findByIdAndDelete(cid);
    return res.status(200).json({
        success: response ? true : false,
        message: response
            ? `Comment width id ${response._id} deleted`
            : "no user deleted",
    });
});
// delete rating

module.exports = {
    createComment,
    deleteComment,
};
