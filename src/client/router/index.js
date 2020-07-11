/*
 * @Author: rockyWu
 * @Date: 2020-07-10 22:00:48
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 23:49:23
 */
//路由配置文件

import Layout from "../app/layout";
import React from "react";
import { Route, Switch } from "react-router-dom";

//服务端也会用到所以通过参数的方式将配置传递进来
function App({ routeList }) {
  return (
    <Layout>
      <Switch>
        {routeList.map((item) => {
          return item.initialData ? (
            <Route
              key={item.path}
              exact={item.exact}
              path={item.path}
              render={(props) => {
                props.initialData = item.initialData;
                return <item.component {...props}></item.component>;
              }}
            />
          ) : (
            <Route key={item.path} {...item} />
          );
        })}
      </Switch>
    </Layout>
  );
}

export default App;
