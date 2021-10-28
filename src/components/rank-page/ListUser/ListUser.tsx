import React from "react";
import WinRateBar from "../WinRateBar/WinRateBar";
import axios from "axios";
import "./list-user.css";
import "../general.css";

interface User {
  freshblood: boolean;
  hotStreak: boolean;
  leaguePoints: number;
  losses: number;
  rank: string;
  summonerId: string;
  summonerName: string;
  veteran: boolean;
  wins: number;
}

export interface IListUserProps {
  user: User;
  key: number;
  position: number;
  tier: string;
  region: string;
}

interface Player {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export interface IListUserState {
  player: Player;
}

export default class ListUser extends React.Component<
  IListUserProps,
  IListUserState
> {
  wins: number = this.props.user.wins;
  loses: number = this.props.user.losses;
  lp: number = this.props.user.leaguePoints;
  tier: string = this.props.tier;
  summoner: string = this.props.user.summonerName;
  position: number = this.props.position;

  componentDidMount() {
    axios
      .get<Player>(
        `https://${this.props.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.summoner}?api_key=RGAPI-d65da2c7-5339-421e-822c-5b4e36b1dc7f`
      )
      .then((response) => {
        this.setState({ player: response.data });
      });
  }

  handleClick = () => console.log(this.state.player.summonerLevel);
  public render() {
    return (
      <div
        className="rk-list-user-container rk-container-shadow rk-rounded-borders"
        onClick={this.handleClick}
      >
        <div className="rk-ranking-container rk-horizontal-center-flex">
          <b> {this.position}</b>
        </div>
        <div className="rk-user-name-container rk-horizontal-center-flex">
          <div>
            <img
              alt="Summoner Icon"
              src={
                this.state &&
                `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${this.state.player.profileIconId}.png`
              }
              width="40px"
            ></img>
          </div>
          <div>{this.summoner}</div>
        </div>
        <div className="rk-tier-container rk-horizontal-center-flex">
          {this.tier}
        </div>
        <div className="rk-lp-container rk-horizontal-center-flex">
          {this.lp}
        </div>
        <div className="rk-level-container rk-horizontal-center-flex">
          {this.state && this.state.player.summonerLevel}
        </div>
        <WinRateBar wins={this.wins} loses={this.loses} />
      </div>
    );
  }
}
