import React from "react"
import Page from "./Page"

function Home() {
  const username = localStorage.getItem("username")
  return (
    <Page title="Start page">
      <h2 className="text-center">
        Hello <strong>{username}</strong>!
      </h2>
      <br />
      <p className="lead text-muted text-center">Welcome to anti-fraud system.</p>
      <p className="lead text-muted text-center">Please select operation from the header to proceed.</p>
    </Page>
    
  )
}

export default Home
