import React from "react";
import "./summonerStats.css"
import bottomLane from "../../../assets/bottom_lane.png"
import middleLane from  "../../../assets/middle_lane.png"
import championExample from "../../../assets/ChampionExample.jpeg"

export class SummonerStats extends React.Component {
    render () {
        return (
            <div className="summonerPage_StatsContainer">
            <div className="summonerPage_WinRateGraph">
                <figure className="chart-three animate">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-background"/>
                        <circle className="circle-foreground"/>
                    </svg>
                    <figcaption>75% of all males like donuts.</figcaption>
                </figure>
            </div>
            <div className="summonerPage_BestChampions">
                <div className="summonerPage_BestChampions_id">
                    <div className="summonerPage_BestChampions_id_imgBox">
                        <img className="summonerPage_BestChampions_id_img" src={championExample} alt="Champion"/>
                    </div>
                    <div className="summonerPage_BestChampions_id_txtBox">
                        <div className="summonerPage_BestChampions_id_championName"> Champion Name </div>
                        <div className="summonerPage_BestChampions_id_txt"> <span>85%</span> (7W3L) </div>
                    </div>
                </div>
                <div className="summonerPage_BestChampions_id">
                    <div className="summonerPage_BestChampions_id_imgBox">
                        <img className="summonerPage_BestChampions_id_img" src={championExample} alt="Champion"/>
                    </div>
                    <div className="summonerPage_BestChampions_id_txtBox">
                        <div className="summonerPage_BestChampions_id_championName"> Champion Name </div>
                        <div className="summonerPage_BestChampions_id_txt"> <span>85%</span> (7W3L) </div>
                    </div>
                </div>
                <div className="summonerPage_BestChampions_id">
                    <div className="summonerPage_BestChampions_id_imgBox">
                        <img className="summonerPage_BestChampions_id_img" src={championExample} alt="Champion"/>
                    </div>
                    <div className="summonerPage_BestChampions_id_txtBox">
                        <div className="summonerPage_BestChampions_id_championName"> Champion Name </div>
                        <div className="summonerPage_BestChampions_id_txt"> <span>85%</span> (7W3L) </div>
                    </div>
                </div>
            </div>
            <div className="summonerPage_PreferredPosition">
                <div className="summonerPage_PreferredPosition_box">
                    <div className="summonerPage_PreferredPosition_txt">Preferred Position</div>
                    <div className="summonerPage_PreferredPosition_Pos">
                        <div className="summonerPage_PreferredPosition_Pos_img">
                            <img className="pos_img" src={bottomLane} alt="Bottom"/>
                        </div>
                        <div className="summonerPage_PreferredPosition_Pos_txt">
                            <div className="pos_txt_1">Bottom</div>
                            <div className="pos_txt_2">67%</div>
                        </div>
                        <div className="summonerPage_PreferredPosition_Pos_WinRatio">
                            Win Ratio: <span>75%</span>
                        </div>
                    </div>
                    <div className="summonerPage_PreferredPosition_Pos">
                        <div className="summonerPage_PreferredPosition_Pos_img">
                            <img className="pos_img" src={middleLane} alt="Middle"/>
                        </div>
                        <div className="summonerPage_PreferredPosition_Pos_txt">
                            <div className="pos_txt_1">Middle</div>
                            <div className="pos_txt_2">57%</div>
                        </div>
                        <div className="summonerPage_PreferredPosition_Pos_WinRatio">
                            Win Ratio: <span>63%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}