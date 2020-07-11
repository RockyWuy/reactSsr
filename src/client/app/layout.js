/*
 * @Author: rockyWu
 * @Date: 2020-07-10 21:56:25
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 21:59:16
 */
import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/index">首页</Link>
        <Link to="/list">列表页</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
