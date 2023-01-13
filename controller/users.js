const jwt = require("jsonwebtoken");
const Users = require("../models/users");

/**
 * 用户登录
 */
const login = async (ctx) => {
  // 获取浏览器发送的用户名和密码
  let { username, pwd } = ctx.request.body;
  // 查找在数据库中是否存在
  await Users.findOne({ username, pwd })
    .then((rel) => {
      console.log(rel);
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

/**
 * 用户注册
 */
const register = async (ctx) => {
  // 获取浏览器发送的用户名和密码
  let { username, pwd } = ctx.request.body;
  //判断用户名是否已存在
  let isDouble = false;

  // 查找在数据库中用户名是否存在
  await Users.findOne({ username }).then((rel) => {
    if (rel) {
      isDouble = true;
    }
  });

  if (isDouble) {
    ctx.body = {
      code: 300,
      msg: "用户名已存在",
    };
    return;
  }
  await Users.create({ username, pwd })
    .then((rel) => {
      if (rel) {
        ctx.body = {
          code: 200,
          msg: "注册成功",
        };
      } else {
        ctx.body = {
          code: 300,
          msg: "注册失败",
          token,
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 500,
        msg: "注册时出现异常",
        err,
      };
    });
};

module.exports = {
  login,
  register,
};
