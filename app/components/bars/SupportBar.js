import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default class SupportBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      dropdown: false,
    };
  }

  dropdown() {
    this.state.dropdown = true;
    console.log(this.state.dropdown);
  }

  render() {
    return (
      <>
        <nav className="mainnav">
          <div>
            <nav>
              <div>
                <ul className="header">
                <li>
                  <Link to="users">All users</Link>
                </li>
                  <li>
                    <Navbar>
                      <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                          <NavDropdown title="Suspicious IP">
                            <NavDropdown.Item as={Link} to="/add-ip" key="1">
                              Add IP
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/delete-ip" key="2">
                              Delete IP
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/list-ip" key="3">
                              List IPs
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                  </li>
                  <li>
                    <Navbar>
                      <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                          <NavDropdown title="Stolen Card">
                            <NavDropdown.Item as={Link} to="/add-stolen-card" key="1">
                              Add Stolen Card
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/delete-stolen-card" key="2">
                              Delete Stolen Card
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/list-stolen-cards" key="3">
                              List Stolen Cards
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                  </li>
                  <li>
                    <Navbar>
                      <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                          <NavDropdown title="Transactions">
                            <NavDropdown.Item as={Link} to="/transaction-history" key="1">
                            Transaction History
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/transaction-history-by-card" key="2">
                            Transaction History by card
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/transaction-feedback" key="3">
                            Transaction Feedback
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </nav>
      </>
    );
  }
}