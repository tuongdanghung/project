const router = require("express").Router();
const controllers = require("../../controller/product/color");
const { verifyToken } = require("../../middlewares/verifyToken");
const { isAdmin } = require("../../middlewares/verify_role");

router.post("/create", [verifyToken, isAdmin], controllers.createColor);
router.get("/", controllers.getAllColor);
router.put("/:cid", [verifyToken, isAdmin], controllers.updateColor);
router.delete("/:cid", [verifyToken, isAdmin], controllers.deleteColor);
module.exports = router;
