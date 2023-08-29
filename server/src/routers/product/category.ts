const router = require("express").Router();
const controllers = require("../../controller/product/category");
const { verifyToken } = require("../../middlewares/verifyToken");
const { isAdmin } = require("../../middlewares/verify_role");

router.post("/create", [verifyToken, isAdmin], controllers.createCategory);
router.get("/", controllers.getAllCategory);
router.put("/:cid", [verifyToken, isAdmin], controllers.updateCategory);
router.delete("/:cid", [verifyToken, isAdmin], controllers.deleteCategory);
module.exports = router;
