import React, {Component} from "react"

import LoginService from "../services/LoginService"
import Page from "./Page"

var username
var password
const handleLogin = () => {
  LoginService.login(username, password)
}
class SimpleLoginComponent extends Component {
  render() {
    return (
      <Page title="Login page" wide={false}>
        <div>
          <label>Username</label>
          <input onChange={e => (username = e.target.value)} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Title" />
          <label>Password</label>
          <input onChange={e => (password = e.target.value)} type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" />

          <p>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block" onClick={handleLogin}>
              Login
            </button>
          </p>
        </div>
      </Page>
    )
  }
}

export default SimpleLoginComponent
