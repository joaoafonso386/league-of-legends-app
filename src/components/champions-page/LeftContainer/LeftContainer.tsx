import React from 'react'
// import Champie from "../../assets/Champie.png";
// import { Card } from "react-bootstrap"
// import axios from 'axios'
// import ChampionCard from './championInfo/ChampionCard';
// import championCard from './championInfo/championCard';
import CardContainer from '../ChampionInfo/CardContainer';


export class LeftContainer extends React.Component {

    render() {
        return (
            <div>
                <div className="cp-search-container">
                    <input type="text" placeholder="Search for a Champion" />
                </div>

                <h2>Champions</h2>

                <div className="cp-champions-gallery">

                    <CardContainer />

                </div>
            </div>
        )
    }
}

export default LeftContainer
