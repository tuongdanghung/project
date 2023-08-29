const user = require("./user");
const product = require("./product/product");
const brand = require("./product/brand");
const category = require("./product/category");
const ram = require("./product/ram");
const capacity = require("./product/capacity");
const color = require("./product/color");

module.exports = (app: any) => {
    app.use("/api/user", user);
    app.use("/api/product", product);
    app.use("/api/brand", brand);
    app.use("/api/category", category);
    app.use("/api/ram", ram);
    app.use("/api/capacity", capacity);
    app.use("/api/color", color);
};
