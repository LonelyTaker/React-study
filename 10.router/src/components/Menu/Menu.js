import React, { Component } from "react"
import { NavLink, Route, Redirect, Switch } from "react-router-dom"
import About from "../../pages/About/About"
import Home from "../../pages/Home/Home"

export default class Menu extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Switch>
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
                <Redirect to="/about"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
