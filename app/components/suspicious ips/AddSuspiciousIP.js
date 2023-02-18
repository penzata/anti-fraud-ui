import React, {Component} from "react";
import axios from "axios";

class AddSuspiciousIP extends Component {
  handleSubmit = (event) => {
    const base64encodedData = localStorage.getItem("Authorization");
    event.preventDefault();
    const ip = {
      ip: this.state.ip,
    };
    console.log(ip);
    axios
      .post("http://localhost:28852/api/antifraud/suspicious-ip", ip, {
        headers: {
          Authorization: base64encodedData,
        },
      })
      .catch((err) => {
        alert(err);
      });
    event.target.reset();
  };

  handleChange = (event) => {
    this.setState({ ip: event.target.value });
  };

  render() {
    return (
      <div className="maincontainer">
        <h4>ADD SUSPICIOUS IP</h4>
        <form onSubmit={this.handleSubmit}>
          <label> Suspicious ip:
            <input className="inputfield" type="text" name="ip" onChange={this.handleChange} />
          </label>
          <button type="submit" className="btn btn-success btn-sm">
            {" "}
            Add{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default AddSuspiciousIP;
