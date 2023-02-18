import React from "react"
import Page from "./Page"

function About() {
  return (
    <Page title="About Us">
      <h2>About Us</h2>
      <br></br>
      <h4>SoftServe trainees:</h4>
      <ul>
        <p className="lead text-muted">Veselin Petkov </p>
        <p className="lead text-muted">Martin Petrov </p>
        <p className="lead text-muted">Oleg Kostrytsyn </p>
        <p className="lead text-muted">Gerasim Simeonov </p>
      </ul>
    </Page>
  )
}

export default About
