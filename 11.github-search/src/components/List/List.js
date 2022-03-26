import React, { Component } from "react"
import PubSub from "pubsub-js"
import "./List.css"
export default class List extends Component {
  state = { users: [], isFirst: true, isLoading: false, errMsg: "" }
  render() {
    const { users, isFirst, isLoading, errMsg } = this.state
    return (
      <div className="row">
        {isFirst ? (
          <h2>请输入关键词</h2>
        ) : isLoading ? (
          <h2>Loading......</h2>
        ) : errMsg ? (
          <h2 style={{ color: "red" }}>{errMsg}</h2>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} style={{ width: "100px" }} alt="avatars" />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
  componentDidMount() {
    this.token = PubSub.subscribe("updateListState", (_, stateObj) => {
      this.setState(stateObj)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
}
