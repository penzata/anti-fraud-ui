import React, {useEffect, useState} from "react";
import axios from "axios";

function ListSuspiciousIP() {
  const [listIps, setListIps] = useState();
  const [change, setChange] = useState();
  const LIST_IPS_API = "http://localhost:28852/api/antifraud/suspicious-ip";
  const DELETE_CARD_API = "http://localhost:28852/api/antifraud/suspicious-ip/";

  useEffect(() => {
    const base64encodedData = localStorage.getItem("Authorization");
    fetch(LIST_IPS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setListIps(json);
      });
  }, [change]);

  function handleDelete(ip) {
    const base64encodedData = localStorage.getItem("Authorization");
    console.log(ip);
    axios
      .delete(DELETE_CARD_API + ip, {
        headers: {
          Authorization: base64encodedData,
        },
      })
      .then(setChange);
  }
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">IP NUMBER</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {listIps &&
              listIps.map((ip) => (
                <tr key={ip.id}>
                  <th scope="row">{ip.id}</th>
                  <td>{ip.ip}</td>
                  <td>
                    <button type="submit" onClick={() => handleDelete(ip.ip)} className="btn btn-danger mx-2" id="delButton">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListSuspiciousIP;
