import React, { Component } from "react"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Menu></Menu>
      </div>
    )
  }
}
