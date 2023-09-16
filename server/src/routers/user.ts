const router = require("express").Router();
const controllers = require("../controller/user");
const { verifyToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/verify_role");
router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.put("/finalRegister/:token", controllers.finalRegister);
router.get("/me", verifyToken, controllers.me);
router.get("/logout", verifyToken, controllers.logout);
router.post("/refreshAccessToken", verifyToken, controllers.refreshAccessToken);
router.get("/", [verifyToken, isAdmin], controllers.getAllUser);
router.put("/address", [verifyToken], controllers.addressUser);
router.put("/update", [verifyToken], controllers.updateUser);
router.put("/update/cart", [verifyToken], controllers.updateCart);
router.delete("/delete-cart/:pid", [verifyToken], controllers.removeCart);
router.put(
    "/updateAdmin/:uid",
    [verifyToken, isAdmin],
    controllers.updateUserByAdmin
);
router.post("/forgotpassword", controllers.forgotPassword);
router.put("/resetpassword", controllers.resetPassword);

module.exports = router;

// CRUD
