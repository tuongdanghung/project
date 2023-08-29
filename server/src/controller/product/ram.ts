const RamModel = require("../../models/product/ram");
const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const createRam = asyncHandler(async (req: Request, res: Response) => {
    const { size } = req.body;
    const checkTitle = await RamModel.findOne({ size });
    if (checkTitle) {
        return res.status(400).json({
            success: false,
            message: "Ram name already exists",
        });
    } else {
        const response = await RamModel.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            message: response ? response : "Can not create product category",
        });
    }
});
// create product category

const getAllRam = asyncHandler(async (req: any, res: Response) => {
    const queries = { ...req.query };
    const query = JSON.stringify(queries);
    const newQueryNumber = query.replace(/"\$(\d+)"/, (match) => `$${match}`);
    if (queries?.size) {
        var formattedQueries = JSON.parse(newQueryNumber);
        formattedQueries.size = parseFloat(
            formattedQueries.size.replace(/\$/g)
        );
    }
    let queryCommand = RamModel.find(formattedQueries);
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queryCommand = queryCommand.select(fields);
    }
    const response = await RamModel.find(formattedQueries).select(
        "-createdAt -updatedAt -__v"
    );
    const count = await RamModel.find(formattedQueries).countDocuments();
    return res.status(200).json({
        success: response ? true : false,
        data: response,
        count,
    });
});
// get all product category

const updateRam = asyncHandler(async (req: Request, res: Response) => {
    const { rid } = req.params;
    const response = await RamModel.findByIdAndUpdate(rid, req.body, {
        new: true,
    });
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not create product category",
    });
});
// update product category
const deleteRam = asyncHandler(async (req: Request, res: Response) => {
    const { rid } = req.params;
    const response = await RamModel.findByIdAndDelete(rid);
    return res.status(200).json({
        success: response ? true : false,
        message: response
            ? `Ram width id ${response._id} deleted`
            : "no user deleted",
    });
});
// delete product category

module.exports = {
    createRam,
    getAllRam,
    updateRam,
    deleteRam,
};
