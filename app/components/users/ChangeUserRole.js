import React, {useEffect, useState} from "react"
import axios from "axios"

function ChangeUserRole() {
  const [listUsersRoles, setListUsersRoles] = useState()
  const [change, setChange] = useState()
  const [role, setRole] = useState("MERCHANT")
  const LIST_USERS_API = "http://localhost:28852/api/auth/list"
  const CHANGE_USER_ROLE = "http://localhost:28852/api/auth/role"
  const roles = [
    {
      label: "Merchant",
      value: "MERCHANT"
    },
    {
      label: "Support",
      value: "SUPPORT"
    }
  ]

  function changeRole(username, role) {
    const jsonBody = {
      username: username,
      role: role
    }
    console.log(jsonBody)
    const base64encodedData = localStorage.getItem("Authorization")
    axios
      .put(CHANGE_USER_ROLE, jsonBody, {
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

  function handleChange(e) {
    console.log("Role Selected!!!")
    setRole(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_USERS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
      .then(res => res.json())
      .then(json => {
        setListUsersRoles(json)
      })
  }, [change])

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">USERNAME</th>
              <th scope="col">ROLE</th>
              <th scope="col">SELECT ROLE</th>
              <th scope="col"> &emsp;ACTION</th>
            </tr>
          </thead>
          <tbody>
            {listUsersRoles &&
              listUsersRoles.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    {" "}
                    <select className="containers" name="role" id="users" value={roles.value} onChange={handleChange}>
                      {roles.map(roles => (
                        <option value={roles.value}>{roles.label}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button type="submit" onClick={() => changeRole(user.username, role)} className="btn btn-success btn-sm">
                      Change Role
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
export default ChangeUserRole
