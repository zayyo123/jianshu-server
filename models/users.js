// 导入mongoose操作数据库
const mongoose = require("mongoose");

// 设置用户对象表的属性
let schema = new mongoose.Schema({
  username: String,
  pwd: {
    type: String,
    select: false,
  },
  // 头像
  avatar: {
    type: String,
    default: "",
  },
  sex: {
    type: String,
    default: "",
  },
  // 描述
  desc: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
});

let Users = mongoose.model("users", schema);

module.exports = Users;
