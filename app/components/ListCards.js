import React, {Component} from "react"

const LIST_CARDS_API = "http://localhost:28852/api/antifraud/stolencard"
export default class ListCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCards: []
    }
  }

  componentDidMount() {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_CARDS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          listCards: json
        })
      })
  }

  render() {
    if (this.state.listCards[0] != null) {
      return (
        // <div>
        //   <div className="container">
        //     {this.state.listCards &&
        //       this.state.listCards.map((card) => (
        //         <div key={card.id}>
        //           {card.id}
        //           <br />
        //           {card.number}
        //           <br />
        //         </div>
        //       ))}

        //   </div>
        // </div>
        <h1>kura mi qnko</h1>
      )
    }
  }
}
