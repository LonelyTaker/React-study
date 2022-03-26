import React, { Component } from "react"
import { connect } from "react-redux"
import { add } from "../redux/actions/person"
class Person extends Component {
  render() {
    const { persons, count } = this.props
    return (
      <div>
        <h1>我是Person组件,上方组件值为{count}</h1>
        <input ref={(c) => (this.input = c)}></input>&nbsp;
        <button onClick={this.add}>增加一个人</button>
        <ul>
          {persons.map((p) => {
            return <li key={p.id}>{p.name}</li>
          })}
        </ul>
      </div>
    )
  }
  add = () => {
    const { value } = this.input
    const { add, persons } = this.props
    add({ id: persons.length + 1, name: value })
    this.input.value = ""
  }
}
export default connect(
  (state) => ({
    persons: state.persons,
    count: state.count,
  }),
  {
    add,
  }
)(Person)
