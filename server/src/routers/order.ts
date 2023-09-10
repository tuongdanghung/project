const router = require("express").Router();
const controllers = require("../controller/order");
const { verifyToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/verify_role");

router.post("/create", [verifyToken], controllers.createOrder);
router.get("/", verifyToken, controllers.getOrder);
router.get("/admin", [verifyToken, isAdmin], controllers.getOrderbyAdmin);
router.put("/status/:oid", [verifyToken], controllers.updatedStatusOrder);
module.exports = router;
