const jwt = require("jsonwebtoken");
const Users = require("../models/users");

// 用户登录
const login = async (ctx) => {
  // 获取浏览器发送的用户名和密码
  let { username, pwd } = ctx.request.body;
  // 查找在数据库中是否存在
  await Users.findOne({ username, pwd })
    .then((rel) => {
      if (rel) {
        let token = jwt.sign(
          { username: rel.username, _id: rel._id },
          // jwt的签名
          "jianshu-serve-jwt",
          { expiresIn: 3600 * 24 * 7 }
        );

        ctx.body = {
          code: 200,
          msg: "登录成功",
          token,
        };
      } else {
        ctx.body = {
          code: 300,
          msg: "登录失败",
          token,
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 500,
        msg: "登录出现异常",
      };
    });
};

module.exports = {
  login,
};
