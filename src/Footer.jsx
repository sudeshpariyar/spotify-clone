import React from 'react'
import './Footer.css';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import SkipPreviousSharpIcon from '@material-ui/icons/SkipPreviousSharp';
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import SkipNextSharpIcon from '@material-ui/icons/SkipNextSharp';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import {Grid, Slider} from "@material-ui/core";
import PlaylistPlaySharpIcon from '@material-ui/icons/PlaylistPlaySharp';
import VolumeDownSharpIcon from '@material-ui/icons/VolumeDownSharp';



function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/en/8/82/Tool-Undertow.jpg" alt=""/>
                <div className="footer__songInfo">
                    <h4>Sober</h4>
                    <p>Tool</p>
                </div>
            </div>
            <div className="footer__centre">
                <ShuffleSharpIcon className="footer__green"/>
                <SkipPreviousSharpIcon className="footer__icon"/>
                <PlayCircleOutlineSharpIcon fontSize="large" className="footer__icon"/>
                <SkipNextSharpIcon className="footer__icon"/>
                <RepeatSharpIcon className="footer__green"/>
            </div>
            <div className="footer__right">
                <Grid container spacing ={2}>
                    <Grid item>
                        <PlaylistPlaySharpIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownSharpIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
