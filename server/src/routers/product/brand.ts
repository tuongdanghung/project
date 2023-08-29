const router = require("express").Router();
const controllers = require("../../controller/product/brand");
const { verifyToken } = require("../../middlewares/verifyToken");
const { isAdmin } = require("../../middlewares/verify_role");

router.post("/create", [verifyToken, isAdmin], controllers.createBrand);
router.get("/", controllers.getAllBrand);
router.put("/:bid", [verifyToken, isAdmin], controllers.updateBrand);
router.delete("/:bid", [verifyToken, isAdmin], controllers.deleteBrand);
module.exports = router;
