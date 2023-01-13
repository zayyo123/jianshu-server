const router = require("koa-router")();
const { login, register, verify } = require("../controller/users");

router.prefix("/users");

// 用户登录
router.post("/login", login);

// 用户注册
router.post("/register", register);

//用户验证
router.post("/verify", verify);

// //查询全部
// router.get();

module.exports = router;
