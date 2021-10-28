import React from "react";
import { SummonerStats } from "./summonerStats/SummonerStats";
import "./summonerPage.css";
import MediaSummonerPage from "../../assets/summonerPage-MediaChampion.jpeg";
import Icon from "../../assets/Champie.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";

export class SummonerPage extends React.Component<any, any> {
  render() {
    console.log(this.props.match);

    return (
      <div className="summonerPage-BigContainer">
        <div className="summonerPage-ImgContainer">
          <img
            className="ImgContainer-Img"
            src={MediaSummonerPage}
            alt="SummonerImage"
          ></img>
        </div>
        <div className="summonerPage-SummonerContainer">
          <div className="SummonerContainer-Summoner">
            <div className="SummonerContainer-Level">
              <h5>Level 375</h5>
              <h3>Summoner Name</h3>
            </div>
            {/* <div className="SummonerContainer-Name">
              <h3>Summoner Name</h3>
            </div> */}
            <div className="SummonerContainer-Icon">
              <img className="Icon" src={Icon} alt="Icon"></img>
            </div>
          </div>
          <div className="SummonerPage-StatsContainer">
            <SummonerStats />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SummonerPage);
