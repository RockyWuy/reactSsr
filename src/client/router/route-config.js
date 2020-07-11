/*
 * @Author: rockyWu
 * @Date: 2020-07-10 21:59:56
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 23:46:34
 */
import Index from "../pages/index";
import List from "../pages/list";
import { matchPath } from "react-router";

export default [
  {
    path: "/index",
    exact: true, //是否精确匹配
    component: Index,
  },
  {
    path: "/list",
    exact: true,
    component: List,
  },
];

export const matchRoute = (path, routeList) => {
  let route;
  for (let item of routeList) {
    if (matchPath(path, item)) {
      route = item;
      break;
    }
  }
  return route;
};
