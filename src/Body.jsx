import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledWhiteSharpIcon from '@material-ui/icons/PlayCircleFilledWhiteSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';


function Body({spotify}) {
    const [{discover_weekly}, dispatch]= useDataLayerValue();
    console.log(discover_weekly)
    return (
        <div className="body">
            <Header spotify = {spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekley</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledWhiteSharpIcon className="body__shuffel"/>
                    <FavoriteBorderSharpIcon fontSize="large"/>
                    <MoreHorizSharpIcon/>
                </div>
                {discover_weekly?.tracks.items.map((item)=>
                    <SongRow track={item.track}/>
                )}
            </div>
        </div>
    )
}

export default Body
