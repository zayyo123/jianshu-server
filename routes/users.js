const router = require("koa-router")();
const { login } = require("../controller/users");

router.prefix("/users");

// 用户登录
router.post("/login", login);

// // 用户注册
// router.post();

// //修改操作
// router.post();

// //查询全部
// router.get();

module.exports = router;
