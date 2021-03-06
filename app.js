//别名注册
require("module-alias/register");
const Koa = require("koa");
const InitManager = require("./core/init");
const parser = require("koa-bodyparser");
const catchError = require("./middlewares/exception");
//CORS跨域
const cors = require("@koa/cors");
//require('./app/models/user')
const app = new Koa();
//提供post请求的中间件注册
app.use(cors());
app.use(parser());
app.use(catchError);

process.cwd();
InitManager.initCore(app);

//客户端兼容性 老版本classic
//开闭原则 修改关闭 增加扩展
//api 版本号
//路径 查询参数
console.log("http://localhost:9000");
app.listen(9000);
