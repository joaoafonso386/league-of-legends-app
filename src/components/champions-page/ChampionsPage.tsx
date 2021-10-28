import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./championsPage.css";

import "./LeftContainer/left-container.css";
import "./RightContainer/right-container.css";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

export default class ChampionsPage extends React.Component {
  render() {
    return (
      <Router>
        <div className="champions-page">
          <div className="cp-container">

            <div className="cp-left-container">
                <LeftContainer />
            </div>

            <div className="cp-right-container">
              <RightContainer />
            </div>
            
          </div>
        </div>
      </Router>
    );
  }
}
