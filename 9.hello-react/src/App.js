import { Component } from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"
export default class App extends Component {
  state = {
    todos: [
      { id: 1, text: "吃饭", done: false },
      { id: 2, text: "睡觉", done: true },
      { id: 3, text: "打豆豆", done: false },
    ],
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} update={this.updateTodos}></Header>
          <List todos={todos} checkChange={this.checkChange} del={this.del}></List>
          <Footer todos={todos} allCheck={this.allCheck} delAllDone={this.delAllDone}></Footer>
        </div>
      </div>
    )
  }
  // 添加todo
  updateTodos = (newTodo) => {
    const { todos } = this.state
    this.setState({ todos: [...todos, newTodo] })
  }
  // 更新todo
  checkChange = (id, val) => {
    const { todos } = this.state
    const index = todos.findIndex((todo) => {
      return todo.id === id
    })
    let newTodos = [...todos]
    newTodos[index].done = val
    this.setState({ todos: newTodos })
  }
  // 删除todo
  del = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }
  // 全选/取消全选
  allCheck = (todos) => {
    this.setState({ todos })
  }
  // 删除已完成
  delAllDone = (todos) => {
    this.setState({ todos })
  }
}
