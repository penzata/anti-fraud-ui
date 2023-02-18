import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class TransactionBar extends Component {
  render() {
    return (
      <nav className="mainnav">
        <div>
          <nav>
            <div>
              <ul className="header">
                <li>
                  <Link to="transaction">Make new transaction</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    )
  }
}
