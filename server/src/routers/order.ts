const router = require("express").Router();
const controllers = require("../controller/order");
const { verifyToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/verify_role");

router.post("/create", [verifyToken, isAdmin], controllers.createOrder);
router.get("/", [verifyToken, isAdmin], controllers.getOrderbyAdmin);
router.put('/status/:oid', [verifyToken, isAdmin], controllers.updatedStatusOrder)
module.exports = router;
