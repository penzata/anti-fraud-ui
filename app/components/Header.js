import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import StateContext from "../StateContext";
import AdminBar from "./bars/AdminBar";
import SupportBar from "./bars/SupportBar";
import TransactionBar from "./bars/MerchantBar";

const logOut = () => {
  window.localStorage.clear();
  window.location.href = "/";
};

function Header(props) {
  const appState = useContext(StateContext);

  return (
    <header className="header-bar bg-warning mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            Anti fraud system
          </Link>
          {localStorage.getItem("role") != null && (
            <div>
              <br />
              <h5>User: {localStorage.getItem("username")}</h5>
            </div>
          )}
        </h4>
        {localStorage.getItem("role") == null && <HeaderLogin />}

        {localStorage.getItem("role") === "ADMINISTRATOR" && <AdminBar />}

        {localStorage.getItem("role") === "SUPPORT" && <SupportBar />}

        {localStorage.getItem("role") === "MERCHANT" && <TransactionBar />}

        {localStorage.getItem("role") !== null && (
          <NavLink to="/" className="btn btn-success btn-sm">
            <div onClick={logOut}>Logout</div>
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
