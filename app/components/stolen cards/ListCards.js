import React, {useEffect, useState} from "react"
import axios from "axios"

function ListCards() {
  const [listCards, setListCards] = useState()
  const [change, setChange] = useState()
  const LIST_CARDS_API = "http://localhost:28852/api/antifraud/stolencard"
  const DELETE_CARD_API = "http://localhost:28852/api/antifraud/stolencard/"

  useEffect(() => {
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
        setListCards(json)
      })
  }, [change])

  function handleDelete(number) {
    const base64encodedData = localStorage.getItem("Authorization")
    console.log(number)
    axios
      .delete(DELETE_CARD_API + number, {
        headers: {
          Authorization: base64encodedData
        }
      })
      .then(setChange)
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">CARD NUMBER</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {listCards &&
              listCards.map(card => (
                <tr key={card.id}>
                  <th scope="row">{card.id}</th>
                  <td>{card.number}</td>
                  <td>
                    <button type="submit" onClick={() => handleDelete(card.number)} className="btn btn-danger mx-2" id="delButton">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListCards
