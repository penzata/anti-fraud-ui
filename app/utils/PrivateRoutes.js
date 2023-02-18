import React from "react"
import {Navigate, Outlet} from "react-router-dom"

const PrivateRoutes = role => {
  let localStorageRole = localStorage.getItem("role")
  return localStorageRole === role.role || localStorageRole === role.role2 ? <Outlet /> : <Navigate to="/unauthorized" />
}
export default PrivateRoutes
