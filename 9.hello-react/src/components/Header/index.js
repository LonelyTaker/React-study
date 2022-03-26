import React, { Component } from "react"
import PropTypes from "prop-types"
import "./index.css"

export default class Header extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
  handleKeyUp = (event) => {
    const {
      keyCode,
      target: { value },
    } = event
    const { todos, update } = this.props
    if (keyCode !== 13) {
      return
    }
    update({ id: todos.length + 1, text: value, done: false })
  }
}
