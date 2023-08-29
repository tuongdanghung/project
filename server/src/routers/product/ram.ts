const router = require("express").Router();
const controllers = require("../../controller/product/ram");
const { verifyToken } = require("../../middlewares/verifyToken");
const { isAdmin } = require("../../middlewares/verify_role");

router.post("/create", [verifyToken, isAdmin], controllers.createRam);
router.get("/", controllers.getAllRam);
router.put("/:rid", [verifyToken, isAdmin], controllers.updateRam);
router.delete("/:rid", [verifyToken, isAdmin], controllers.deleteRam);
module.exports = router;
