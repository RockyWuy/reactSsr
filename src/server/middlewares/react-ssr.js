/*
 * @Author: rockyWu
 * @Date: 2020-07-10 20:04:14
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 23:43:01
 */
// 完成 react ssr 工作的中间件,组件在服务端渲染的逻辑都在这个文件内
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router";
import App from "../../client/router/index";
import routeList from "../../client/router/route-config";
import { matchRoute } from "../../client/router/route-config";

export default async (ctx, next) => {
  //获得请求的 path
  const path = ctx.request.path;
  if (path === "/favicon.ico") return;
  let targetRoute = matchRoute(path, routeList);
  console.log("targetRoute", targetRoute);

  let fetchDataFn = targetRoute.component.getInitialState;
  let fetchResult = {};
  if (fetchDataFn) {
    fetchResult = await fetchDataFn();
  }

  const context = {
    initialData: fetchResult,
  };

  //渲染组件为 html 字符串
  const html = renderToString(
    <StaticRouter location={path} context={context}>
      <App routeList={routeList}></App>
    </StaticRouter>
  );

  ctx.body = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>my react ssr</title>
        </head>
        <body>
            <div id="root">
              ${html}
            </div>
            <textarea id="ssrTextInitData" style="display:none;">
              ${JSON.stringify(fetchResult)}
            </textarea>
        </body>
        <script type="text/javascript"  src="index.js"></script>
    </html>
`;

  return next();
};
