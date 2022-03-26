import React, { Component } from "react"
import "./index.css"

export default class Item extends Component {
  state = { show: false }
  render() {
    const { show } = this.state
    const { text, done, id } = this.props
    return (
      <li style={{ backgroundColor: show ? "#ddd" : "white" }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.checkChange(id)} />
          <span>{text}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: show ? "block" : "none" }}
          onClick={() => {
            this.del(id)
          }}
        >
          删除
        </button>
      </li>
    )
  }
  handleMouse = (val) => {
    return () => {
      this.setState({ show: val })
    }
  }
  checkChange = (id) => {
    return (event) => {
      const { checkChange } = this.props
      checkChange(id, event.target.checked)
    }
  }
  del = (id) => {
    const { del } = this.props
    if (window.confirm("确定删除吗？")) {
      del(id)
    }
  }
}
