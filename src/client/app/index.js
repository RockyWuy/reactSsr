/*
 * @Author: rockyWu
 * @Date: 2020-07-10 19:45:50
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 23:54:52
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "../router/index";
import { BrowserRouter } from "react-router-dom";
import routeList from "../router/route-config"; //路由配置
import { matchRoute } from "../router/route-config";

// 初始数据
let initialData = JSON.parse(document.getElementById("ssrTextInitData").value);
// 查找路由
let route = matchRoute(document.location.pathname, routeList);
// 设置组件初始化数据
route.initialData = initialData;
console.log("initialData", initialData);
//渲染入口
ReactDOM.hydrate(
  <BrowserRouter>
    <App routeList={routeList} />
  </BrowserRouter>,
  document.getElementById("root")
);
