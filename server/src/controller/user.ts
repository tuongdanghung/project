const UserModel = require("../models/user");
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const {
    generateAccessToken,
    generateRefreshToken,
} = require("../middlewares/jwt");

const sendMail = require("../utils/sendmail");
const crypto = require("crypto");
const makeToken = require("uniqid");

const register = asyncHandler(async (req: Request, res: Response) => {
    const { email, password, firstName, lastName, mobile } = req.body;
    if (!email || !password || !firstName || !lastName || !mobile) {
        return res.status(400).json({
            success: false,
            message: "Missing input",
        });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
        throw new Error("Email has already been used");
    } else {
        const token = makeToken();
        const uniqueToken = crypto.randomBytes(16).toString("hex"); // Generate a unique token
        const emailedited = btoa(email) + "@" + token;
        const newUser = await UserModel.create({
            email: emailedited,
            password,
            firstName,
            lastName,
            mobile,
        });
        if (newUser) {
            const html = `<h2>Register code : </h2> <br/> <h1> ${token} </h1>`;
            const data = {
                email,
                html,
                subject: "Confirm your register",
            };
            await sendMail(data);
        }
        setTimeout(async () => {
            await UserModel.deleteOne({ email: emailedited });
        }, 300000);
        return res.status(200).json({
            success: newUser ? true : false,
            message: newUser
                ? "Please check your email"
                : "Something went wrong",
        });
    }
});
// chưa nhập mail email bị mã hóa
// register

const finalRegister = asyncHandler(async (req: Request, res: Response) => {
    const { token } = req.params;
    const notActiveEmail = await UserModel.findOne({
        email: new RegExp(`${token}$`),
    });

    if (notActiveEmail) {
        notActiveEmail.email = atob(notActiveEmail?.email?.split("@")[0]);
        notActiveEmail.save();
    }
    return res.json({
        success: notActiveEmail ? true : false,
        response: notActiveEmail
            ? "Register successfully "
            : "something went wrong",
    });
});

// finalregister

const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Missing input",
        });
    }
    const response = await UserModel.findOne({ email });
    if (response && (await response.isCorrectPassword(password))) {
        const { password, role, createdAt, updatedAt, refreshToken, ...data } =
            response.toObject();
        const accessToken = generateAccessToken(response._id, role);
        const newRefreshToken = generateRefreshToken(response._id);
        await UserModel.findByIdAndUpdate(
            response._id,
            { refreshToken: newRefreshToken },
            { new: true }
        );
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({
            success: true,
            message: "Login successfully",
            accessToken,
            data: data,
        });
    } else {
        return res.status(500).json({
            success: false,
            message: "Login failed",
        });
    }
});
// login

const me = asyncHandler(async (req: any, res: Response) => {
    const { _id } = req.user;
    const user = await UserModel.findById({ _id })
        .select("-createdAt -updatedAt")
        .populate({
            path: "cart",
            // fill vao arr cart
            populate: {
                path: "product",
                // fill vao obj product trong cart
                select: "title price image quantity",
                // lay cac truong mong muon
            },
        });
    return res.status(200).json({
        success: user ? true : false,
        message: user ? user : "user not found",
    });
});
// get me

const refreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
    // Lấy token từ cookies
    const cookie = req.cookies;
    // Check xem có token hay không
    if (!cookie && !cookie.refreshToken)
        throw new Error("No refresh token in cookies");
    // Check token có hợp lệ hay không
    const JWT_SECRET = "qweqweqweqweqweqweqweqweqweqweqweqweqweqwe";
    const rs = await jwt.verify(cookie.refreshToken, JWT_SECRET);
    const response = await UserModel.findOne({
        _id: rs._id,
        refreshToken: cookie.refreshToken,
    });
    return res.status(200).json({
        success: response ? true : false,
        newAccessToken: response
            ? generateAccessToken(response._id, response.role)
            : "Refresh token not matched",
    });
});
// refresh token

const logout = asyncHandler(async (req: Request, res: Response) => {
    const cookie = req.cookies;
    if (!cookie || !cookie.refreshToken)
        throw new Error("No refresh token in cookies");
    // Xóa refresh token ở db
    await UserModel.findOneAndUpdate(
        { refreshToken: cookie.refreshToken },
        { refreshToken: "" },
        { new: true }
    );
    // Xóa refresh token ở cookie trình duyệt
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    return res.status(200).json({
        success: true,
        mes: "Logout is done",
    });
});
//   logout

const getAllUser = asyncHandler(async (req: any, res: Response) => {
    const queries = { ...req.query };

    // tách các trường đặc biệt ra khỏi query
    const excludeFields = ["limit", "sort", "page", "fields"];
    excludeFields.forEach((el) => delete queries[el]);

    // format lại các operator cho đúng cú pháp mongoose

    const queryString = JSON.stringify(queries);
    const newQueryString = queryString.replace(
        /\b(gte|gt|lt|lte)\b/g,
        (match) => `$${match}`
    );
    const formattedQueries = JSON.parse(newQueryString);
    // filtering
    // if (queries?.name) formattedQueries.name = { $regex: queries.name, $options: 'i' }

    // sorting
    if (req.query.name) {
        delete formattedQueries.name;
        formattedQueries["$or"] = [
            { firstName: { $regex: req.query.name, $options: "i" } },
            { lastName: { $regex: req.query.name, $options: "i" } },
            { email: { $regex: req.query.name, $options: "i" } },
        ];
    }
    let queryCommand = UserModel.find(formattedQueries);
    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        queryCommand = queryCommand.sort(sortBy);
    }

    // Field Limiting (Giới hạn trường)

    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queryCommand = queryCommand.select(fields);
    }
    const response = await UserModel.find(formattedQueries).select(
        "-createdAt -updatedAt -password -refreshToken -secondary_role -__v"
    );
    const count = await UserModel.find(formattedQueries).countDocuments();
    return res.status(200).json({
        success: response ? true : false,
        data: response,
        count,
    });
});
// get all users

const updateUser = asyncHandler(async (req: any, res: Response) => {
    //
    const { _id } = req.user;
    // user lấy từ token
    if (!_id || Object.keys(req.body).length === 0)
        throw new Error("Missing inputs");

    const response = await UserModel.findByIdAndUpdate(_id, req.body, {
        new: true,
    }).select("-password -role -refreshToken -createdAt -updatedAt -__v");
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Some thing went wrong",
    });
});
// update user by user

const updateUserByAdmin = asyncHandler(async (req: any, res: Response) => {
    //
    const { uid } = req.params;
    // user lấy từ token
    if (Object.keys(req.body).length === 0) throw new Error("Missing inputs");

    const response = await UserModel.findByIdAndUpdate(uid, req.body, {
        new: true,
    }).select("-password -role -refreshToken -createdAt -updatedAt -__v");
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Some thing went wrong",
    });
});
// update user by admin

const addressUser = asyncHandler(async (req: any, res: Response) => {
    const { country, city, wards, street } = req.body;
    const { _id } = req.user;
    // user lấy từ token
    if (!country || !city || !wards || !street)
        throw new Error("Missing inputs");
    const response = await UserModel.findByIdAndUpdate(
        _id,
        { address: req.body },
        { new: true }
    ).select("-password -refreshToken -__v ");
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Some thing went wrong",
    });
});
// edit address

const updateCart = asyncHandler(async (req: any, res: Response) => {
    const { _id } = req.user;
    const { pid, quantity, color, ram, capacity, price } = req.body;
    console.log({ pid, quantity, color, ram, capacity, price });
    // mặc định số lượng trong giỏ hàng là 1
    // user lấy từ token
    if (!pid) throw new Error("Missing inputs");
    const user = await UserModel.findById(_id).select("cart");
    const alreadyProduct = user?.cart?.find(
        (el: any) =>
            el.product.toString() === pid &&
            el.color === color &&
            el.ram === ram &&
            el.capacity.size === capacity.size
    );
    // tìm trong giỏ hàng có sp hay chưa
    if (alreadyProduct) {
        // dat tim thay
        const response = await UserModel.updateOne(
            { cart: { $elemMatch: alreadyProduct } },
            {
                $set: {
                    "cart.$.quantity": alreadyProduct.quantity + quantity,
                    "cart.$.color": color,
                    "cart.$.capacity": capacity,
                    "cart.$.ram": ram,
                    "cart.$.totalPrice": alreadyProduct.totalPrice + price,
                },
            },
            { new: true }
        );
        return res.status(200).json({
            success: response ? true : false,
            data: response
                ? "add to cart successfully"
                : "Some thing went wrong",
        });
    } else {
        const response = await UserModel.findByIdAndUpdate(
            _id,
            {
                $push: {
                    cart: {
                        product: pid,
                        quantity,
                        color,
                        capacity,
                        ram,
                        totalPrice: price,
                    },
                },
            },
            { new: true }
        );
        return res.status(200).json({
            success: response ? true : false,
            message: response
                ? "add to cart successfully"
                : "Some thing went wrong",
        });
    }
});
// add to cart
const removeCart = asyncHandler(async (req: any, res: Response) => {
    const { _id } = req.user;
    const { pid } = req.params;
    // user lấy từ token
    const user = await UserModel.findById(_id).select("cart");
    const alreadyProduct = user?.cart?.find(
        (el: any) => el.id.toString() === pid
    );
    // tìm trong giỏ hàng có sp hay chưa
    if (!alreadyProduct) {
        return res.status(200).json({
            success: true,
            message: "khong co trong gio hang",
        });
    }
    const response = await UserModel.findByIdAndUpdate(
        _id,
        { $pull: { cart: { _id: pid } } },
        { new: true }
    );
    return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Some thing went wrong",
    });
});
// remove cart
module.exports = {
    register,
    login,
    finalRegister,
    me,
    logout,
    refreshAccessToken,
    getAllUser,
    addressUser,
    updateUser,
    updateUserByAdmin,
    updateCart,
    removeCart,
};
