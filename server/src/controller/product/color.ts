const ColorModel = require("../../models/product/color");
const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const createColor = asyncHandler(async (req: Request, res: Response) => {
    const { color } = req.body;
    const checkTitle = await ColorModel.findOne({ color });
    if (checkTitle) {
        return res.status(400).json({
            success: false,
            message: "Color name already exists",
        });
    } else {
        const response = await ColorModel.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            message: response ? response : "Can not create Color",
        });
    }
});
// create product category

const getAllColor = asyncHandler(async (req: any, res: Response) => {
    const queries = { ...req.query };
    const query = JSON.stringify(queries);
    const newQueryString = query.replace(
        /\b(gte|gt|lt|lte)\b/g,
        (match) => `$${match}`
    );
    if (queries?.color) {
        var formattedQueries = JSON.parse(newQueryString);
        formattedQueries.color = { $regex: queries.color, $options: "i" };
    }
    let queryCommand = ColorModel.find(formattedQueries);
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queryCommand = queryCommand.select(fields);
    }
    const response = await ColorModel.find(formattedQueries).select(
        "-createdAt -updatedAt -__v"
    );
    const count = await ColorModel.find(formattedQueries).countDocuments();
    return res.status(200).json({
        success: response ? true : false,
        data: response,
        count,
    });
});
// get all product category

const updateColor = asyncHandler(async (req: Request, res: Response) => {
    const { cid } = req.params;
    console.log(cid);
    const response = await ColorModel.findByIdAndUpdate(cid, req.body, {
        new: true,
    });
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not update Color",
    });
});
// update product category
const deleteColor = asyncHandler(async (req: Request, res: Response) => {
    const { cid } = req.params;
    const response = await ColorModel.findByIdAndDelete(cid);
    return res.status(200).json({
        success: response ? true : false,
        message: response
            ? `Color width id ${response._id} deleted`
            : "no user deleted",
    });
});
// delete product category

module.exports = {
    createColor,
    getAllColor,
    updateColor,
    deleteColor,
};
