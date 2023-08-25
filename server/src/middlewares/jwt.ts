const jwt = require("jsonwebtoken");
const JWT_SECRET = "qweqweqweqweqweqweqweqweqweqweqweqweqweqwe";
const generateAccessToken = (uid: number, role: number) =>
    jwt.sign({ _id: uid, role }, JWT_SECRET, { expiresIn: "2d" });
const generateRefreshToken = (uid: number) =>
    jwt.sign({ _id: uid }, JWT_SECRET, { expiresIn: "7d" });

module.exports = {
    generateAccessToken,
    generateRefreshToken,
};
