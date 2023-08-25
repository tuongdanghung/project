const user = require("./user");

module.exports = (app: any) => {
    app.use("/api/user", user);
};
