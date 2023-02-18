import React, {useState} from "react";
import TransactionService from "../../services/TransactionService";
import {useNavigate} from "react-router-dom";

function Transaction() {
  const [amount, setAmount] = useState();
  const [ip, setIP] = useState();
  const [number, setNumber] = useState();
  const [region, setRegion] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    try {
      TransactionService.registerTransaction(amount, ip, number, region, date);
      console.log("Transaction was successfully created.");
      alert("Transaction was successfully created.");
      navigate("/");
    } catch (e) {
      alert("There was an error.");
      console.log("There was an error.");
    }
  }

  return (
    <div className="container">
      <h4 style={{ textAlign: "center" }}>CREATE A TRANSACTION</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount-register" className="text-muted mb-1">
            <small>Amount</small>
          </label>
          <input onChange={(e) => setAmount(e.target.value)} id="amount-register" name="amount" className="form-control" type="number" placeholder="Set an amount" autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="ip-register" className="text-muted mb-1">
            <small>IP</small>
          </label>
          <input onChange={(e) => setIP(e.target.value)} id="ip-register" name="ip" className="form-control" type="text" placeholder="Set an IP address" autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="card-register" className="text-muted mb-1">
            <small>Card number</small>
          </label>
          <input onChange={(e) => setNumber(e.target.value)} id="card-register" name="card" className="form-control" type="number" placeholder="Set an card number" autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="region-register" className="text-muted mb-1">
            <small>Region</small>
          </label>
          <input onChange={(e) => setRegion(e.target.value)} id="region-register" name="region" className="form-control" type="text" placeholder="Set a region" autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="date-register" className="text-muted mb-1">
            <small>Date</small>
          </label>
          <input onChange={(e) => setDate(e.target.value)} id="date-register" name="date" className="form-control" type="datetime-local" placeholder="Set a date in format yyyy-MM-ddTHH:mm:ss" autoComplete="off" />
        </div>
        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default Transaction;
