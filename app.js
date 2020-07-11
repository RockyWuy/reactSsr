/*
 * @Author: rockyWu
 * @Date: 2020-07-10 19:38:50
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 20:57:38
 */
const path = require("path");
const Koa = require("koa2");
const koaStatic = require("koa-static");
const reactSsr = require("./dist/src/server/middlewares/react-ssr").default;
const app = new Koa();

app.use(koaStatic(path.join(__dirname, "./dist/static")));

app.use(reactSsr);

app.listen(9000);
console.log("server is start at 9000");
