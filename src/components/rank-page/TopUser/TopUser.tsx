import React from "react";
import WinRateBar from "../WinRateBar/WinRateBar";
import axios from "axios";
import "./top-user.css";
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

export interface ITopUserProps {
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

export interface IMainTopState {
  player: Player;
}

export default class TopUser extends React.Component<
  ITopUserProps,
  IMainTopState
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
        className="rk-top-user-container rk-container-shadow rk-rounded-borders"
        onClick={this.handleClick}
      >
        <div className="rk-ranking-container">
          <b>{this.position}</b>
        </div>
        <div className="rk-user-name-container">
          <img
            alt="Summoner Icon"
            src={
              this.state &&
              `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${this.state.player.profileIconId}.png`
            }
            width="18%"
          ></img>
          <div>{this.summoner}</div>
        </div>
        <div className="rk-stad">
          <span className="rk-tier-container">Tier: {this.tier}</span>
          <span className="rk-lp-container">{this.lp} LP</span>
          <span className="rk-level-container">
            Lv. {this.state && this.state.player.summonerLevel}
          </span>
        </div>
        <div className="rk-align-left">Win Rate</div>
        <WinRateBar wins={this.wins} loses={this.loses} />
      </div>
    );
  }
}
