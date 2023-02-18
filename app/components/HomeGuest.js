import React, { useState } from "react";
import Page from "./Page";
import RegisterService from "../services/RegisterService";

import { useNavigate } from "react-router-dom";

function HomeGuest() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    RegisterService.register(name, username, password);
    e.target.reset();
  }

  return (
    <Page title="Welcome to anti-fraud system!" wide={true}>
      <div className="row align-items-center" style={{ height: "700px" }}>
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Anti-Fraud System</h1>
          <p className="lead text-muted">Simple system to handle money transactions, block stolen cards and suspicious IPs.</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name-register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input onChange={(e) => setName(e.target.value)} id="name-register" name="name" className="form-control" type="text" placeholder="Enter your name" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input onChange={(e) => setUsername(e.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Choose an username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input onChange={(e) => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Add user
            </button>
          </form>
        </div>
      </div>
    </Page>
  );
}

export default HomeGuest;
