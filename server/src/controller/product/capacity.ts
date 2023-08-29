const CapacityModel = require("../../models/product/capacity");
const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const createCapacity = asyncHandler(async (req: Request, res: Response) => {
    const { size } = req.body;
    const checkTitle = await CapacityModel.findOne({ size });
    if (checkTitle) {
        return res.status(400).json({
            success: false,
            message: "Capacity name already exists",
        });
    } else {
        const response = await CapacityModel.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            message: response ? response : "Can not create product category",
        });
    }
});
// create product category

const getAllCapacity = asyncHandler(async (req: any, res: Response) => {
    const queries = { ...req.query };
    const query = JSON.stringify(queries);
    const newQueryNumber = query.replace(/"\$(\d+)"/, (match) => `$${match}`);
    if (queries?.size) {
        var formattedQueries = JSON.parse(newQueryNumber);
        formattedQueries.size = parseFloat(
            formattedQueries.size.replace(/\$/g)
        );
    }
    let queryCommand = CapacityModel.find(formattedQueries);
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queryCommand = queryCommand.select(fields);
    }
    const response = await CapacityModel.find(formattedQueries).select(
        "-createdAt -updatedAt -__v"
    );
    const count = await CapacityModel.find(formattedQueries).countDocuments();
    return res.status(200).json({
        success: response ? true : false,
        data: response,
        count,
    });
});
// get all product category

const updateCapacity = asyncHandler(async (req: Request, res: Response) => {
    const { cid } = req.params;
    const response = await CapacityModel.findByIdAndUpdate(cid, req.body, {
        new: true,
    });
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Can not update Capacity",
    });
});
// update product category
const deleteCapacity = asyncHandler(async (req: Request, res: Response) => {
    const { cid } = req.params;
    const response = await CapacityModel.findByIdAndDelete(cid);
    return res.status(200).json({
        success: response ? true : false,
        message: response
            ? `Capacity width id ${response._id} deleted`
            : "no user deleted",
    });
});
// delete product category

module.exports = {
    createCapacity,
    getAllCapacity,
    updateCapacity,
    deleteCapacity,
};
