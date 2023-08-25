const asyncHandler = require("express-async-handler");

const isAdmin = asyncHandler(async (req: any, res: any, next: any) => {
    const { role } = req.user;
    if (+role !== 1) {
        return res.status(401).json({
            success: false,
            message: "REQUIRE ADMIN ROLE",
        });
    } else {
        next();
    }
});
module.exports = {
    isAdmin,
};
