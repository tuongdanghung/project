import jwt from "jsonwebtoken";
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req: any, res: any, next: any) => {
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        const token = req.headers.authorization.split(" ")[1];
        const JWT_SECRET = "qweqweqweqweqweqweqweqweqweqweqweqweqweqwe";
        jwt.verify(token, JWT_SECRET, (err: any, decode: any) => {
            if (err)
                return res.status(401).json({
                    success: false,
                    mes: "Invalid access token",
                });
            req.user = decode;
            next();
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Required authentication",
        });
    }
});
module.exports = {
    verifyToken,
};
