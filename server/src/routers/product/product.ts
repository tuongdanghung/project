const router = require("express").Router();
const controllers = require("../../controller/product/product");
const { verifyToken } = require("../../middlewares/verifyToken");
const { isAdmin } = require("../../middlewares/verify_role");
const uploadCloud = require("../../config/cloudinary.config");

router.post(
    "/create",
    [verifyToken, isAdmin],
    uploadCloud.array("image", 5),
    controllers.createProduct
);
router.get("/:pid", controllers.getOneProduct);
router.get("/", controllers.getAllProduct);
router.put(
    "/:pid",
    [verifyToken, isAdmin],
    uploadCloud.array("image", 5),
    controllers.updateProduct
);
router.delete("/:pid", [verifyToken, isAdmin], controllers.deleteProduct);

module.exports = router;
