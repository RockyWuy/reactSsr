/*
 * @Author: rockyWu
 * @Date: 2020-07-10 19:44:00
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 21:09:12
 */

import React from "react";

//组件
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handlerClick() {
    alert("一起来玩 react ssr 呀。");
  }

  render() {
    return <h1 onClick={this.handlerClick}>click here!</h1>;
  }
}
