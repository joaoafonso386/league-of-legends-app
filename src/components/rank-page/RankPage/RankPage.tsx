import React from "react";
import MainUser from "../MainUser/MainUser";
import TopUser from "../TopUser/TopUser";
import ListUser from "../ListUser/ListUser";
import "../general.css";
import "./rank-page.css";
import axios from "axios";

export default class RankPage extends React.Component {
  state = {
    users: [],
    region: "euw1",
    tier: "challenger",
  };

  componentDidMount() {
    axios
      .get<[]>(
        `https://${this.state.region}.api.riotgames.com/lol/league/v4/${this.state.tier}leagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-d65da2c7-5339-421e-822c-5b4e36b1dc7f`
      )
      .then((response) => {
        let x: any = response.data.entries;
        this.setState(
          (state) =>
            (state = {
              users: x.sort((a, b) => {
                return b.leaguePoints - a.leaguePoints;
              }),
            })
        );
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.region !== "" &&
      this.state.tier !== "" &&
      (this.state.region !== prevState.region ||
        this.state.tier !== prevState.tier)
    ) {
      axios
        .get<[]>(
          `https://${this.state.region}.api.riotgames.com/lol/league/v4/${this.state.tier}leagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-d65da2c7-5339-421e-822c-5b4e36b1dc7f`
        )
        .then((response) => {
          let x: any = response.data.entries;
          this.setState(
            (state) =>
              (state = {
                users: x.sort((a, b) => {
                  return b.leaguePoints - a.leaguePoints;
                }),
              })
          );
        });
    }
  }

  handleRegion = (event) => {
    this.setState({ region: event.target.value });
  };
  handleTier = (event) => {
    this.setState({ tier: event.target.value });
  };

  public render() {
    return (
      <div className="rk-body">
        <div className="rk-selectors">
          <div className="rk-selectors-selectors-titles">
            Select Region: {this.state.region}
          </div>
          <div className="rk-selectors-region-container">
            <button
              className="rk-selectors-region-button"
              value="br1"
              onClick={this.handleRegion}
            >
              BR1
            </button>
            <button
              className="rk-selectors-region-button"
              value="eun1"
              onClick={this.handleRegion}
            >
              EUN1
            </button>
            <button
              className="rk-selectors-region-button"
              value="euw1"
              onClick={this.handleRegion}
            >
              EUW1
            </button>
            <button
              className="rk-selectors-region-button"
              value="jp1"
              onClick={this.handleRegion}
            >
              JP1
            </button>
            <button
              className="rk-selectors-region-button"
              value="kr"
              onClick={this.handleRegion}
            >
              KR
            </button>
            <button
              className="rk-selectors-region-button"
              value="la1"
              onClick={this.handleRegion}
            >
              LA1
            </button>
            <button
              className="rk-selectors-region-button"
              value="la2"
              onClick={this.handleRegion}
            >
              LA2
            </button>
            <button
              className="rk-selectors-region-button"
              value="na1"
              onClick={this.handleRegion}
            >
              NA1
            </button>
            <button
              className="rk-selectors-region-button"
              value="oc1"
              onClick={this.handleRegion}
            >
              OC1
            </button>
            <button
              className="rk-selectors-region-button"
              value="ru"
              onClick={this.handleRegion}
            >
              RU
            </button>
            <button
              className="rk-selectors-region-button"
              value="tr1"
              onClick={this.handleRegion}
            >
              TR1
            </button>
          </div>
          <div className="rk-selectors-selectors-titles">
            Select Tier: {this.state.tier}
          </div>
          <div className="rk-selectors-tier-container">
            <button
              className="rk-selectors-tier-button"
              value="challenger"
              onClick={this.handleTier}
            >
              Challenger
            </button>
            <button
              className="rk-selectors-tier-button"
              value="grandmaster"
              onClick={this.handleTier}
            >
              GrandMaster
            </button>
            <button
              className="rk-selectors-tier-button"
              value="master"
              onClick={this.handleTier}
            >
              Master
            </button>
          </div>
        </div>
        <div>
          {this.state.users.length > 0 && (
            <MainUser
              user={this.state.users[0]}
              tier={this.state.tier}
              region={this.state.region}
              key={this.state.users[0].summonerName}
            />
          )}
        </div>
        <div className="rk-top-users">
          {this.state.users.length > 0 &&
            this.state.users
              .filter((elem, index) => index > 0 && index < 4)
              .map((elem, key) => (
                <TopUser
                  key={elem.summonerName}
                  user={elem}
                  position={key + 2}
                  tier={this.state.tier}
                  region={this.state.region}
                />
              ))}
        </div>
        <div className="rk-list-users">
          <div className="rk-list-header rk-rounded-borders">
            <div className="rk-horizontal-center-flex rk-ranking-container">
              <b>R</b>
            </div>
            <div className="rk-horizontal-center-flex">
              <b>Summoner</b>
            </div>
            <div className="rk-horizontal-center-flex">
              <b>Tier</b>
            </div>
            <div className="rk-horizontal-center-flex">
              <b>LP</b>
            </div>
            <div className="rk-horizontal-center-flex">
              <b>Level</b>
            </div>
            <div className="rk-horizontal-center-flex">
              <b>Win Rate</b>
            </div>
          </div>
          {this.state.users.length > 0 &&
            this.state.users
              .filter((elem, index) => index > 3 && index < 100)
              .map((elem, key) => (
                <ListUser
                  key={elem.summonerName}
                  user={elem}
                  position={key + 5}
                  tier={this.state.tier}
                  region={this.state.region}
                />
              ))}
        </div>
      </div>
    );
  }
}
