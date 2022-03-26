import React, { Component } from "react"
import PropTypes from "prop-types"
import "./index.css"

import Item from "../Item"

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkChange: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
  }
  render() {
    const { todos, checkChange, del } = this.props
    return (
      <ul className="todo-main">
        {todos.map((t) => {
          return <Item key={t.id} {...t} checkChange={checkChange} del={del}></Item>
        })}
      </ul>
    )
  }
}
