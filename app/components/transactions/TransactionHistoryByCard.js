import React, {useState} from "react";

function TransactionHistoryByCard() {
  const [listTransactions, setListTransactions] = useState();
  const [change, setChange] = useState();
  const [card_number, setNumber] = useState();
  const LIST_TRANSACTIONS_API = "http://localhost:28852/api/antifraud/history/";

  function getListOfTransactions() {
    const base64encodedData = localStorage.getItem("Authorization");
    try {
      fetch(LIST_TRANSACTIONS_API + card_number, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: base64encodedData,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setListTransactions(json);
        });
    } catch (error) {
      alert(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getListOfTransactions();
  }

  return (
    <div className="container" >
      <div className="list-transactions">
      <h4>TRANSACTION HISTORY BY CARD</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input name="number" onChange={(e) => setNumber(e.target.value)} placeholder="Card ID" input/>
            <button type="submit"> SEARCH </button>
          </div>
        </form>
        <div className="">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">IP</th>
                <th scope="col">NUMBER</th>
                <th scope="col">REGION</th>
                <th scope="col">DATE</th>
                <th scope="col">RESULT</th>
                <th scope="col">FEEDBACK</th>
              </tr>
            </thead>
            <tbody>
              {listTransactions &&
                listTransactions.map((transaction) => (
                  <tr key={transaction.transactionId}>
                    <td scope="row">{transaction.transactionId}</td>
                    <td scope="row">{transaction.amount}</td>
                    <td scope="row">{transaction.ip}</td>
                    <td scope="row">{transaction.number}</td>
                    <td scope="row">{transaction.region}</td>
                    <td scope="row">{transaction.date}</td>
                    <td scope="row">{transaction.result}</td>
                    <td scope="row">{transaction.feedback}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TransactionHistoryByCard;
