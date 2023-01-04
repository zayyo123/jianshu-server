const router = require("koa-router")();
const userCtl = require("../controller/users");

router.prefix("/users");

// 添加系统用户
router.post("/add", userCtl.userAdd);

// 删除操作
router.post("/del", userCtl.userDel);

//修改操作
router.post("/update", userCtl.userUpdate);

//查询全部
router.get("/find", userCtl.userFind);

// 查询某个id
router.get("/find/:id", userCtl.userfindOne);

module.exports = router;
