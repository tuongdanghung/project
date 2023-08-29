const asyncHandler = require("express-async-handler");
import { Request, Response } from "express";
const slugify = require("slugify");
const ProductModel = require("../../models/product/product");
const UserModel = require("../../models/user");

const createProduct = asyncHandler(async (req: any, res: Response) => {
    const { title } = req.body;

    if (Object.keys(req.body).length === 0) throw new Error("missing input");

    if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
    const checkTitle = await ProductModel.findOne({ title });
    if (checkTitle) {
        return res.status(400).json({
            success: false,
            message: "Product name already exists",
        });
    } else {
        const image = req?.files?.map((el: any) => ({ image: el.path }));
        const ram = JSON.parse(req.body.ram);
        const color = JSON.parse(req.body.color);
        const capacity = JSON.parse(req.body.capacity);
        const data = { ...req.body, image: image, color, ram, capacity };
        const response = await ProductModel.create(data);
        return res.status(200).json({
            success: response ? true : false,
            message: response ? response : "Can not create product",
        });
    }
});
// create product

const getOneProduct = asyncHandler(async (req: Request, res: Response) => {
    const { pid } = req.params;
    if (!pid) throw new Error("missing input");
    const response = await ProductModel.findById(pid).select(
        "-createdAt -updatedAt -__v"
    );
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "can not details product",
    });
});
// get One Product

const getAllProduct = asyncHandler(async (req: any, res: Response) => {
    const queries = { ...req.query };
    // tách các trường đặc biệt ra khỏi query
    const excludeFields = ["limit", "sort", "page", "fields"];
    excludeFields.forEach((el) => delete queries[el]);

    // format lại các operator cho đúng cú pháp mongoose

    const query = JSON.stringify(queries);
    const newQueryString = query.replace(
        /\b(gte|gt|lt|lte)\b/g,
        (match) => `$${match}`
    );
    // filtering
    if (queries?.title) {
        var formattedQueries = JSON.parse(newQueryString);
        formattedQueries.title = { $regex: queries.title, $options: "i" };
    }
    if (queries?.category) {
        var formattedQueries = JSON.parse(newQueryString);
        formattedQueries.category = { $regex: queries.category, $options: "i" };
    }
    if (queries?.brand) {
        var formattedQueries = JSON.parse(newQueryString);
        formattedQueries.brand = { $regex: queries.brand, $options: "i" };
    }
    const newQueryNumber = query.replace(/"\$(\d+)"/, (match) => `$${match}`);
    if (queries?.price) {
        var formattedQueries = JSON.parse(newQueryNumber);
        formattedQueries.price = parseFloat(
            formattedQueries.price.replace(/\$/g)
        );
    }
    let queryCommand = ProductModel.find(formattedQueries);
    // sorting

    // Field Limiting (Giới hạn trường)

    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queryCommand = queryCommand.select(fields);
    }
    const response = await ProductModel.find(formattedQueries).select(
        "-createdAt -updatedAt -__v"
    );
    const count = await ProductModel.find(formattedQueries).countDocuments();
    return res.status(200).json({
        success: response ? true : false,
        data: response,
        count,
    });
});
// get all products

const updateProduct = asyncHandler(async (req: any, res: Response) => {
    const { pid } = req.params;
    const imageFile = req?.files?.map((el: any) => ({ image: el.path }));
    const ram = JSON.parse(req.body.ram);
    const color = JSON.parse(req.body.color);
    const capacity = JSON.parse(req.body.capacity);
    const imageCloud = JSON.parse(req.body.imageCloud);
    const image = [...imageCloud, ...imageFile];
    const data = { ...req.body, image: image, color, ram, capacity };
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
    const response = await ProductModel.findByIdAndUpdate(pid, data, {
        new: true,
    }).select("-createdAt -updatedAt -__v");
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Updated failed",
    });
});
// update product

const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    const { pid } = req.params;
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
    const response = await ProductModel.findByIdAndDelete(pid).select(
        "-createdAt -updatedAt -__v"
    );
    return res.status(200).json({
        success: response ? true : false,
        data: response ? `Product ${pid} deleted` : "Some thing went wrong",
    });
});
// delete product

module.exports = {
    createProduct,
    getOneProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
};
