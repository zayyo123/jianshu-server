const { User } = require("../models");
const crud = require("./crudUtil");

// 添加系统用户
const userAdd = async (ctx) => {
  let { username = "", pwd = "" } = ctx.request.body;
  await crud.add(User, { username, pwd }, ctx);
};

// 删除操作
const userDel = async (ctx, next) => {
  let { _id } = ctx.request.body;
  await crud.del(User, { _id }, ctx);
};

//修改操作
const userUpdate = async (ctx, next) => {
  let params = ctx.request.body;
  await crud.update(
    User,
    { _id: params._id },
    { username: params.username, pwd: params.pwd },
    ctx
  );
};

//查询全部
const userFind = async (ctx, next) => {
  await crud.find(User, null, ctx);
}

// 查询某个id
const userfindOne = async (ctx, next) => {
  await crud.find(User, { _id: ctx.params.id }, ctx);
};
module.exports = {
  userAdd,
  userDel,
  userUpdate,
  userFind,
  userfindOne,
};
