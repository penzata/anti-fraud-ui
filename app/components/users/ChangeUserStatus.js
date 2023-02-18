import React, {useEffect, useState} from "react"
import axios from "axios"

function ChangeUserStatus() {
  const [listUsersAccess, setListUsersAccess] = useState()
  const [change, setChange] = useState()
  const LIST_USERS_ACCESS_API = "http://localhost:28852/api/auth/list-access"

  function changeStatus(username, access) {
    const jsonBody = {
      username: username,
      operation: access == "LOCK" ? "UNLOCK" : "LOCK"
    }
    const base64encodedData = localStorage.getItem("Authorization")
    return axios
      .put("http://localhost:28852/api/auth/access", jsonBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: base64encodedData
        }
      })
      .then(setChange)
      .catch(err => {
        alert(err)
      })
  }

  useEffect(() => {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_USERS_ACCESS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
      .then(res => res.json())
      .then(json => {
        setListUsersAccess(json)
      })
  }, [change])

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">USERNAME</th>
              <th scope="col">STATUS</th>
              <th scope="col"> &emsp; &nbsp;ACTION</th>
            </tr>
          </thead>
          <tbody>
            {listUsersAccess &&
              listUsersAccess.map((user, index) => (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.access + "ED"}</td>
                  <td>
                    <button className="btn btn-success btn-sm" type="submit" onClick={() => changeStatus(user.username, user.access)}>
                      Change Status
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
export default ChangeUserStatus
