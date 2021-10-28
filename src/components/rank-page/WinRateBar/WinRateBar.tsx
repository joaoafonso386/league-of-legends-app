import React from "react";
import "./win-rate-bar.css";
import "../general.css";

export interface IWinRateBarProps {
  wins: number;
  loses: number;
}

export default class WinRateBar extends React.Component<IWinRateBarProps> {
  wins: number = this.props.wins;
  loses: number = this.props.loses;
  winProp: string = this.wins + "fr " + this.loses + "fr";
  public render() {
    return (
      <div className="rk-win-rate-container rk-horizontal-center-flex">
        <div
          className="rk-win-rate-bar"
          style={{ display: "grid", gridTemplateColumns: this.winProp }}
        >
          <div className="rk-win-rate">{this.wins}</div>
          <div className="rk-lose-rate">{this.loses}</div>
        </div>
        <div className="rk-horizontal-center-flex">
          {Math.floor((this.wins / (this.loses + this.wins)) * 100)}%
        </div>
      </div>
    );
  }
}
