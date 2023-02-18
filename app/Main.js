import React from "react";
import * as ReactDOM from "react-dom/client";
import ListUsers from "./components/users/ListUsers";
import SimpleLoginComponent from "./components/SimpleLoginComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeGuest from "./components/HomeGuest";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import PrivateRoutes from "./utils/PrivateRoutes";
import ChangeUserStatus from "./components/users/ChangeUserStatus";
import AdminBar from "./components/bars/AdminBar";
import ChangeUserRole from "./components/users/ChangeUserRole";
import SuspiciosIP from "./components/suspicious ips/AddSuspiciousIP";
import ListSuspiciousIP from "./components/suspicious ips/ListSuspiciousIP";
import DeleteIp from "./components/suspicious ips/DeleteIp";
import AddCard from "./components/stolen cards/AddCard";
import ListCards from "./components/stolen cards/ListCards";
import DeleteCard from "./components/stolen cards/DeleteCard";
import Transaction from "./components/transactions/Transaction";
import TransactionFeedback from "./components/transactions/TransactionFeedback";
import TransactionHistory from "./components/transactions/TransactionHistory";
import TransactionHistoryByCard from "./components/transactions/TransactionHistoryByCard";
import Unauthorized from "./components/Unauthorized";
import DeleteUser from "./components/users/DeleteUser";
import Home from "./components/Home";

function ExampleComponent() {
  let localStorageRole = localStorage.getItem("role");
  if (localStorageRole === null) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomeGuest />}></Route>
          <Route path="/login" element={<SimpleLoginComponent />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
        </Routes>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes role="SUPPORT" />}>
            <Route path="/transaction-feedback" element={<TransactionFeedback />}></Route>
            <Route path="/transaction-history" element={<TransactionHistory />}></Route>
            <Route path="/transaction-history-by-card" element={<TransactionHistoryByCard />}></Route>
            <Route path="/add-ip" element={<SuspiciosIP />}></Route>
            <Route path="/list-ip" element={<ListSuspiciousIP />}></Route>
            <Route path="/delete-ip" element={<DeleteIp />}></Route>
            <Route path="/add-stolen-card" element={<AddCard />}></Route>
            <Route path="/list-stolen-cards" element={<ListCards />}></Route>
            <Route path="/delete-stolen-card" element={<DeleteCard />}></Route>
          </Route>
          <Route element={<PrivateRoutes role="SUPPORT" role2="ADMINISTRATOR" />}>
            <Route path="/users" element={<ListUsers />}></Route>
          </Route>
          <Route element={<PrivateRoutes role="ADMINISTRATOR" />}>
            <Route path="/change-user-status" element={<ChangeUserStatus />}></Route>
            <Route path="/change-user-role" element={<ChangeUserRole />}></Route>
            <Route path="/delete-user" element={<DeleteUser />}></Route>
            <Route path="/admin" element={<AdminBar />}></Route>
          </Route>
          <Route element={<PrivateRoutes role="MERCHANT" />}>
            <Route path="/transaction" element={<Transaction />}></Route>
          </Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<SimpleLoginComponent />}></Route>
          <Route path="/logged" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
        </Routes>
        <Footer />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExampleComponent />
    </BrowserRouter>
  </React.StrictMode>
);
if (module.hot) {
  module.hot.accept();
}
