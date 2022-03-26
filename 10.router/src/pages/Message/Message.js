import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import Detail from "./Detail/Detail"
export default class Message extends Component {
  state = {
    messageList: [
      { id: 1, title: "消息1", content: "消息内容1" },
      { id: 2, title: "消息2", content: "消息内容2" },
      { id: 3, title: "消息3", content: "消息内容3" },
    ],
  }
  render() {
    const { messageList } = this.state
    return (
      <div>
        <ul>
          {messageList.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${message.id}/${message.title}/${message.content}`}>{message.title}</Link> */}
                {/* 向路由组件传递search参数 */}
                <Link to={`/home/message/detail?id=${message.id}&title=${message.title}&content=${message.content}`}>{message.title}</Link>
                {/* 向路由组件传递state参数 */}
                {/* <Link to={{ pathname: "/home/message/detail", state: { id: message.id, title: message.title, content: message.content } }}>{message.title}</Link> */}
              </li>
            )
          })}
        </ul>
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title/:content" component={Detail}></Route> */}
        {/* search参数和state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
