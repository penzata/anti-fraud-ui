import React, {Component} from "react";
import axios from "axios";

const ADD_CARD_API = "http://localhost:28852/api/antifraud/stolencard";
class AddCard extends Component {
  handleSubmit = (event) => {
    const base64encodedData = localStorage.getItem("Authorization");
    event.preventDefault();
    const card = {
      number: this.state.card,
    };
    console.log(card);
    axios
      .post(ADD_CARD_API, card, {
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
    this.setState({ card: event.target.value });
  };

  render() {
    return (
      <div className="maincontainer">
        <h4>ADD STOLEN CARD</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card number:
            <input className="inputfield" type="text" name="card" onChange={this.handleChange} />
          </label>
          <button  type="submit" className="btn btn-success btn-sm"> Add </button>
        </form>
      </div>
    );
  }
}

export default AddCard;
