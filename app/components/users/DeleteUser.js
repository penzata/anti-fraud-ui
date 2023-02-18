import React, {Component} from "react"
import axios from "axios"

const DELETE_USER_API = "http://localhost:28852/api/auth/user/"
class DeleteUser extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const base64encodedData = localStorage.getItem("Authorization")
    event.preventDefault()
    const user = {
      user: this.state.user
    }
    console.log(user)
    axios
      .delete(DELETE_USER_API + this.state.user, {
        headers: {
          Authorization: base64encodedData
        }
      })
      .catch(err => {
        alert(err)
      })
    event.target.reset()
  }

  handleChange = event => {
    this.setState({ user: event.target.value })
  }

  render() {
    return (
      <div className="maincontainer">
        <form onSubmit={this.handleSubmit}>
          <big>Username: </big>
          <input type="text" name="user" onChange={this.handleChange} />
          <button type="submit"> Delete </button>
        </form>
      </div>
    )
  }
}

export default DeleteUser
