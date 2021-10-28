import React from "react";
import logo from "../../assets/main-logo.jpg";
import SearchPlayer from "../shared/SearchPlayer";
import { withRouter } from "react-router-dom";

import "./HomePage.css";

export class HomePage extends React.Component {
  render() {
    // const { location } = this.props;

    return (
      <div className="home-page">
        <h1>Find a Summoner</h1>
        <img src={logo} alt="logo" />
        <SearchPlayer />
      </div>
    );
  }
}

export default HomePage;
