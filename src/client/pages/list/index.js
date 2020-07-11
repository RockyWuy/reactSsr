/*
 * @Author: rockyWu
 * @Date: 2020-07-10 19:44:00
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 23:56:04
 */

import React from "react";
import tempData from "./data";

//组件
export default class List extends React.Component {
  constructor(props) {
    super(props);
    // initialData = props.staticContext.initialData || {};
    this.state =
      (props.staticContext && props.staticContext.initialData) ||
      props.initialData ||
      {};
  }

  // 静态方法 数据预取方法
  static async getInitialState() {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: tempData,
          });
        }, 100);
      });
    };
    let res = await fetchData();
    return res;
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    if (!this.state.data) {
      //判断是否有初始化数据
      //进行数据请求
      Index.getInitialProps().then((res) => {
        this.setState({
          data: res.data || [],
        });
      });
    }
  }

  handlerClick() {
    alert("一起来玩 react 服务端渲染");
  }

  render() {
    const { code, data } = this.state;
    return (
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
