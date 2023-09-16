const router = require("express").Router();
const controllers = require("../controller/blog");
const { verifyToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/verify_role");

router.post("/create", [verifyToken, isAdmin], controllers.createBlog);
router.get("/", verifyToken, controllers.getAllBlog);
router.get("/:bid", verifyToken, controllers.getOneBLog);
router.delete("/:bid", [verifyToken, isAdmin], controllers.deleteBlog);
router.put("/:bid", [verifyToken], controllers.updatedBlog);
module.exports = router;
