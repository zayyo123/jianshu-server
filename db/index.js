const mongoose = require("mongoose");

module.exports = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://localhost:27017/jianshu", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      family: 4,
    })
    .then(() => {
      console.log("数据库连接成功");
    })
    .catch((err) => {
      console.error("数据库连接失败", err);
    });
};
