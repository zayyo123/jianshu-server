const router = require("koa-router")();
const { login, register, verify, updatePwd } = require("../controller/users");

router.prefix("/users");

// 用户登录
router.post("/login", login);

// 用户注册
router.post("/register", register);

//用户验证
router.post("/verify", verify);

//修改密码
router.post("/updatePwd", updatePwd);

module.exports = router;
