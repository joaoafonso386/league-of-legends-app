import React from 'react'


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



interface IChampionCardProps{
    champion: Champion
}


export default class ChampionCard extends React.Component<IChampionCardProps> {
    
    championId: string = this.props.champion.id;
    


    render() {

        return (
            <div className="cp-card" style={{ width: '100px', height: '150px', backgroundColor: 'transparent', border: '0px'}}>
                <img className="cp-card-img" alt={this.championId} style={{width: '100px'}} src={`https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${this.championId}.png`} />
                <div className="cp-card-body" style={{display: 'flex', justifyContent: 'center', width: '70px'}}>
                    <div className="cp-card-text" style={{ fontSize: '20px', fontWeight: 500, color:'#e6e0cf', width: '100px'}}>{this.championId}
                    </div>
                </div>
            </div>
        )
    }
}

