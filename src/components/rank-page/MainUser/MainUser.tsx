import React from "react";
import WinRateBar from "../WinRateBar/WinRateBar";
import axios from "axios";
import "./main-user.css";
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

interface IMainUserProps {
  user: User;
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

interface IMainUserState {
  player: Player;
}

export default class MainUser extends React.Component<
  IMainUserProps,
  IMainUserState
> {
  wins: number = this.props.user.wins;
  loses: number = this.props.user.losses;
  lp: number = this.props.user.leaguePoints;
  tier: string = this.props.tier;
  summoner: string = this.props.user.summonerName;
  position: number = 1;
  imgSrc: string = `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/`;

  componentDidMount() {
    axios
      .get<Player>(
        `https://${this.props.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.summoner}?api_key=RGAPI-d65da2c7-5339-421e-822c-5b4e36b1dc7f`
      )
      .then((response) => {
        this.setState((state) => (state = { player: response.data }));
      });
  }

  handleClick = () => console.log(this.state.player.summonerLevel);

  public render() {
    return (
      <div
        className="rk-main-user-container rk-container-shadow rk-rounded-borders"
        onClick={this.handleClick}
      >
        <div className="rk-image-container">
          <img
            alt="Summoner Icon"
            src={
              this.state &&
              `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${this.state.player.profileIconId}.png`
            }
            width="60%"
          ></img>
        </div>
        <div className="rk-ranking-container">
          <b>{this.position}</b>
        </div>
        <div className="rk-texts-container">
          <div className="rk-user-name-container">
            <div>{this.summoner}</div>
          </div>
          <div className="rk-stad">
            <span className="rk-tier-container">Tier: {this.tier}</span>
            <span className="rk-lp-container">{this.lp} LP</span>
            <span className="rk-level-container">
              Lv. {this.state && this.state.player.summonerLevel}
            </span>
          </div>
          <div>Win Rate</div>
          <WinRateBar wins={this.wins} loses={this.loses} />
        </div>
      </div>
    );
  }
}
