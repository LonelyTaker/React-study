import React, { Component } from "react"
import qs from "qs"

export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title, content } = this.props.match.params

    // 接收search参数
    const { search } = this.props.location
    const { id, title, content } = qs.parse(search.slice(1))

    // 接收state参数
    // const { id, title, content } = this.props.location.state || {}

    return (
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{content}</li>
      </ul>
    )
  }
}
