import React from "react";
import HomePage from "./components/home-page/HomePage";
import ChampionsPage from "./components/champions-page/ChampionsPage";
import RankPage from "./components/rank-page/RankPage/RankPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SummonerPage from "./components/summoner-page/SummonerPage";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./App.css";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link className="menu-item" to="/">
                Jungle Diff Website
              </Link>
            </Navbar.Brand>
            <Nav className="auto">
              <Nav.Link>
                <Link className="menu-item" to="/summoner">
                  Summoner
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="menu-item" to="/ranking">
                  Ranking
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="menu-item" to="/champions">
                  Champions
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/summoner">
            <SummonerPage />
          </Route>
          <Route path="/champions">
            <ChampionsPage />
          </Route>
          <Route path="/ranking">
            <RankPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
