import React, { Component } from "react"
import PropTypes from "prop-types"
import "./index.css"

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    allCheck: PropTypes.func.isRequired,
    delAllDone: PropTypes.func.isRequired,
  }
  render() {
    const { todos } = this.props
    const doneNumber = todos.reduce((pre, todo) => {
      return todo.done ? pre + 1 : pre
    }, 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneNumber === todos.length && todos.length !== 0 ? true : false} onChange={this.allCheck} />
        </label>
        <span>
          已完成{doneNumber} / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.delAllDone}>
          清除已完成任务
        </button>
      </div>
    )
  }

  allCheck = () => {
    const { todos, allCheck } = this.props
    const doneNumber = todos.reduce((pre, todo) => {
      return todo.done ? pre + 1 : pre
    }, 0)
    let newTodos = []
    if (doneNumber === todos.length) {
      newTodos = todos.map((todo) => {
        return { ...todo, done: false }
      })
    } else {
      newTodos = todos.map((todo) => {
        return { ...todo, done: true }
      })
    }
    allCheck(newTodos)
  }
  delAllDone = () => {
    const { todos, delAllDone } = this.props
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    delAllDone(newTodos)
  }
}
