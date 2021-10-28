import React from 'react'
import axios from "axios";
// import CardGroup from "react-bootstrap/CardGroup";
import ChampionCard from './ChampionCard';

interface ChampionImage {
    full: string,
    sprite: string,
    group: string,
    x: number,
    y: number,
    w: number,
    h: number
}

interface Champion {
    blurb: string,
    id: string,
    image: ChampionImage,
    info: {},
    key: string,
    partype: string,
    stats: {},
    tags: {},
    title: string,
    version: string
}

 interface ChampionState {
    champion: Champion,
    version: '',
    champions: any,
    championsNames: string[]
}

export default class CardContainer extends React.Component <{} , ChampionState> {

    componentDidMount() {

        axios
            .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
            .then((response) => {
                this.setState({ version: response.data[0] });
                
                axios
                    .get(`https://ddragon.leagueoflegends.com/cdn/${this.state.version}/data/en_US/champion.json`)
                    .then((response) => {
                      let x: any = response.data;
                        this.setState({ champions: x, championsNames: Object.getOwnPropertyNames(x.data) });
                        console.log(x.data)
                        console.log(this.state)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            })
            .catch((error) => {
                console.log(error)
            });
        };
        
  // Get champions array with id

    render() {

        return (
            <div className="cp-card-group">
                {this.state && this.state.champions
                && this.state.championsNames
                    .map((elem, index) => (
                      <ChampionCard
                        key={index}
                        champion={this.state.champions.data[elem]}
                      />

                    ))
                }
            </div>
  )};
}
