import React, { Component } from "react"
import { connect } from "react-redux"
import { add, sub, add_async } from "../redux/actions/count"

class Count extends Component {
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>这是Count组件</h1>
        <h2>当前值：{count}</h2>
        <select
          ref={(c) => {
            this.select = c
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.add}>+</button>&nbsp;
        <button onClick={this.sub}>-</button>&nbsp;
        <button onClick={this.add_async}>异步+</button>
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
  add_async = () => {
    const { value } = this.select
    const { add_async } = this.props
    add_async(value * 1, 1000)
  }
}

export default connect((state) => ({ count: state.count }), { add, sub, add_async })(Count)
