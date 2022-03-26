import React, { Component } from "react"
// 引入react-redux连接UI组件和redux
import { connect } from "react-redux"
import { createAddAction, createSubAction, createAsyncAddAction } from "../redux/count_action"

class Count extends Component {
  render() {
    const { count } = this.props
    return (
      <div>
        <h2>当前值为{count}</h2>
        <select ref={(c) => (this.select = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.add}>+1</button>&nbsp;
        <button onClick={this.sub}>-1</button>&nbsp;
        <button onClick={this.add_odd}>奇数加</button>&nbsp;
        <button onClick={this.add_async}>异步加</button>
      </div>
    )
  }

  add = () => {
    const { value } = this.select
    const { add } = this.props
    add(value * 1)
  }
  sub = () => {
    const { value } = this.select
    const { sub } = this.props
    sub(value * 1)
  }
  add_odd = () => {
    const { value } = this.select
    const { count, add } = this.props
    if (count % 2 !== 0) {
      add(value * 1)
    }
  }
  add_async = () => {
    const { value } = this.select
    const { add_async } = this.props
    add_async(value * 1, 1000)
  }
}

// 创建并暴露一个容器组件
export default connect(
  (state) => ({
    count: state,
  }),
  // 一般写法
  // (dispatch) => ({
  //   add: (data) => {
  //     dispatch(createAddAction(data))
  //   },
  //   sub: (data) => {
  //     dispatch(createSubAction(data))
  //   },
  //   add_async: (data, time) => {
  //     dispatch(createAsyncAddAction(data, time))
  //   },
  // })

  // 简写
  {
    add: createAddAction,
    sub: createSubAction,
    add_async: createAsyncAddAction,
  }
)(Count)
