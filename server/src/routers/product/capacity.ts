const router = require("express").Router();
const controllers = require("../../controller/product/capacity");
const { verifyToken } = require("../../middlewares/verifyToken");
const { isAdmin } = require("../../middlewares/verify_role");

router.post("/create", [verifyToken, isAdmin], controllers.createCapacity);
router.get("/", controllers.getAllCapacity);
router.put("/:cid", [verifyToken, isAdmin], controllers.updateCapacity);
router.delete("/:cid", [verifyToken, isAdmin], controllers.deleteCapacity);
module.exports = router;
