import React, { Component } from "react"
import PubSub from "pubsub-js"
// import axios from "axios"

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => {
              this.keywordElement = c
            }}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
  search = async () => {
    const { value: keyword } = this.keywordElement
    PubSub.publish("updateListState", { isFirst: false, isLoading: true })
    /*
    axios({
      url: "https://api.github.com/search/users",
      method: "GET",
      params: {
        q: keyword,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          const { data } = res
          PubSub.publish("updateListState", { isLoading: false, users: data.items })
        } else {
          PubSub.publish("updateListState", { isLoading: false, errMsg: "请求出错" })
        }
      })
      .catch((err) => {
        PubSub.publish("updateListState", { isLoading: false, errMsg: "请求出错" })
      })
      */

    // 使用fetch发送
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${keyword}`)
      const data = await res.json()
      PubSub.publish("updateListState", { isLoading: false, users: data.items })
    } catch (err) {
      PubSub.publish("updateListState", { isLoading: false, errMsg: "请求出错" })
    }
  }
}
