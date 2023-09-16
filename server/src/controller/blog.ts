const BlogModel = require("../models/blog");
const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const createBlog = asyncHandler(async (req: Request, res: Response) => {
    const { title } = req.body;
    const checkTitle = await BlogModel.findOne({ title });
    if (checkTitle) {
        return res.status(400).json({
            success: false,
            message: "Brand name already exists",
        });
    } else {
        const response = await BlogModel.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            message: response ? response : "Can not create product category",
        });
    }
});
// create product category

const getAllBlog = asyncHandler(async (req: any, res: Response) => {
    const queries = { ...req.query };
    const query = JSON.stringify(queries);
    const newQueryString = query.replace(
        /\b(gte|gt|lt|lte)\b/g,
        (match) => `$${match}`
    );
    if (queries?.title) {
        var formattedQueries = JSON.parse(newQueryString);
        formattedQueries.title = { $regex: queries.title, $options: "i" };
    }
    let queryCommand = BlogModel.find(formattedQueries);
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queryCommand = queryCommand.select(fields);
    }
    const response = await BlogModel.find(formattedQueries).select(
        "-createdAt -updatedAt -__v"
    );
    const count = await BlogModel.find(formattedQueries).countDocuments();
    return res.status(200).json({
        success: response ? true : false,
        data: response,
        count,
    });
});
// // get all product category

const updatedBlog = asyncHandler(async (req: Request, res: Response) => {
    const { bid } = req.params;
    const response = await BlogModel.findByIdAndUpdate(bid, req.body, {
        new: true,
    });
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not create product category",
    });
});
// // update product category
const deleteBlog = asyncHandler(async (req: Request, res: Response) => {
    const { bid } = req.params;
    const response = await BlogModel.findByIdAndDelete(bid);
    return res.status(200).json({
        success: response ? true : false,
        message: response
            ? `brand width id ${response._id} deleted`
            : "no user deleted",
    });
});
// // delete product category

const getOneBLog = asyncHandler(async (req: Request, res: Response) => {
    const { bid } = req.params;
    console.log(bid);
    if (!bid) throw new Error("missing input");

    const response = await BlogModel.findById(bid).select(
        "-createdAt -updatedAt -__v"
    );

    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "can not details blog",
    });
});

module.exports = {
    createBlog,
    getAllBlog,
    updatedBlog,
    deleteBlog,
    getOneBLog,
};
