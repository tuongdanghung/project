const router = require("express").Router();
const controllers = require("../controller/comment");
const { verifyToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/verify_role");

router.post("/create", [verifyToken], controllers.createComment);
// router.get("/", verifyToken, controllers.getOrder);
// router.get("/admin", [verifyToken, isAdmin], controllers.getOrderbyAdmin);
router.delete("/:cid", [verifyToken], controllers.deleteComment);
module.exports = router;
