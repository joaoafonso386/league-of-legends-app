import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { withRouter, Switch, Route } from "react-router-dom";
import SummonerPage from "../summoner-page/SummonerPage";

import "./SearchPlayer.css";

interface Props {
  history: any;
}

export class SearchPlayer extends React.Component {
  state = { search: "" };
  props: Props;

  onFormSubmit = () => {
    return this.props.history.push(`/summoner/${this.state.search}`);
  };

  render() {
    return (
      <div>
        <form className="search-player" onSubmit={this.onFormSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="playerName"
              name="playerName"
              type="text"
              required
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              placeholder="name@example.com"
            />
            <label htmlFor="playerName">Search for a player</label>
          </Form.Floating>
          <Button
            type="submit"
            id="button-addon1"
            variant="dark"
            size="lg"
            active
            className="search-player-button"
          >
            Search
          </Button>
        </form>

        <Switch>
          <Route path="/users/:id" component={SummonerPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(SearchPlayer);
