const user = require("./user");
const product = require("./product/product");
const brand = require("./product/brand");
const category = require("./product/category");
const ram = require("./product/ram");
const capacity = require("./product/capacity");
const color = require("./product/color");
const order = require("./order");
const comment = require("./comment");

module.exports = (app: any) => {
    app.use("/api/user", user);
    app.use("/api/product", product);
    app.use("/api/brand", brand);
    app.use("/api/category", category);
    app.use("/api/ram", ram);
    app.use("/api/capacity", capacity);
    app.use("/api/color", color);
    app.use("/api/order", order);
    app.use("/api/comment", comment);
};
