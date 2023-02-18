import React, {Component} from "react"
import axios from "axios"

class DeleteIp extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const url = `http://localhost:28852/api/antifraud/suspicious-ip/+event.ip`
    const base64encodedData = localStorage.getItem("Authorization")
    event.preventDefault()
    const ip = {
      ip: this.state.ip
    }
    console.log(ip)
    axios
      .delete(`http://localhost:28852/api/antifraud/suspicious-ip/` + this.state.ip, {
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
    this.setState({ ip: event.target.value })
  }

  render() {
    return (
      <div className="maincontainer">
        <h4>DELETE SUSPICIOUS IP</h4>
        <form onSubmit={this.handleSubmit}>
          <big>IP: </big>
          <input className="inputfield" type="text" name="ip" onChange={this.handleChange} />
          <button type="submit" className="btn btn-danger btn-sm"> Delete </button>
        </form>
      </div>
    )
  }
}
export default DeleteIp
