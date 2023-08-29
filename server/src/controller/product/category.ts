const CategoryModel = require("../../models/product/category");
const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const createCategory = asyncHandler(async (req: Request, res: Response) => {
    const { title } = req.body;
    const checkTitle = await CategoryModel.findOne({ title });
    if (checkTitle) {
        return res.status(400).json({
            success: false,
            message: "Brand name already exists",
        });
    } else {
        const response = await CategoryModel.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            message: response ? response : "Can not create product category",
        });
    }
});
// create product category

const getAllCategory = asyncHandler(async (req: any, res: Response) => {
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
    let queryCommand = CategoryModel.find(formattedQueries);
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queryCommand = queryCommand.select(fields);
    }
    const response = await CategoryModel.find(formattedQueries).select(
        "-createdAt -updatedAt -__v"
    );
    const count = await CategoryModel.find(formattedQueries).countDocuments();
    return res.status(200).json({
        success: response ? true : false,
        data: response,
        count,
    });
});
// get all product category

const updateCategory = asyncHandler(async (req: Request, res: Response) => {
    const { cid } = req.params;
    const response = await CategoryModel.findByIdAndUpdate(cid, req.body, {
        new: true,
    });
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not create product category",
    });
});
// update product category
const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
    const { cid } = req.params;
    const response = await CategoryModel.findByIdAndDelete(cid);
    return res.status(200).json({
        success: response ? true : false,
        message: response
            ? `brand width id ${response._id} deleted`
            : "no user deleted",
    });
});
// delete product category

module.exports = {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
};
