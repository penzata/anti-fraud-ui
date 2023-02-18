import React, {Component} from "react";
import axios from "axios";

const DELETE_CARD_API = "http://localhost:28852/api/antifraud/stolencard/";
class DeleteCard extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const base64encodedData = localStorage.getItem("Authorization");
    event.preventDefault();
    const card = {
      card: this.state.card,
    };
    console.log(card);
    axios
      .delete(DELETE_CARD_API + this.state.card, {
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
        <h4>DELETE CARD</h4>
        <form onSubmit={this.handleSubmit}>
          <big>Card number: </big>
          <input className="inputfield" type="text" name="card" onChange={this.handleChange} />
          <button type="submit" className="btn btn-danger btn-sm"> Delete </button>
        </form>
      </div>
    );
  }
}

export default DeleteCard;
