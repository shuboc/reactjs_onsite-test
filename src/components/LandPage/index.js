import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landpage.css";
import logo from "../../assets/images/logo.png";

export default class LandPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> welcome Onsite Testing </p>
          <a
            className="App-link"
            href="https://www.grindr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grindr.coms
          </a>
          <Link to="/weather">weather</Link>
        </header>
      </div>
    );
  }
}
