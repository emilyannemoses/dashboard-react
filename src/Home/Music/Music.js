import React, {Component} from 'react';
import './Music.css'
import {Link} from 'react-router-dom';
import Spotify from '../../spotify'

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spotify: Spotify
        }
        this.playerCheckInterval = null;
      }
    render() {
        console.log("Music: ",Spotify)
        return (
            <div>
                { Spotify.error && <p>Error: {Spotify.error }</p>}
                <div className="music">
                    now playing on spotify
                </div>
                { Spotify.loggedIn ? (
                    <div className="info">
                        <div className="currently-playing">
                            <h2 className="song-name">{Spotify.albumName}</h2>
                            <h2 className="song-name">{Spotify.trackName}</h2>
                            <h3 className="artist-name">{Spotify.artistName}</h3>
                        </div>
                        <div className="controls">
                            {/* <div className="option"><i className="fas fa-bars"></i></div> */}
                            {/* <div className="volume"><i className="fas fa-volume-up"></i></div> */}
                            <div className="previous" onClick={() => Spotify.onPrevClick()}><i className="fas fa-backward"></i></div>
                            <div className="play" onClick={() => Spotify.onPlayClick()}>{ Spotify.playing ? "Pause" : "Play"}</div>
                            <div className="next" onClick={() => Spotify.onNextClick()}><i className="fas fa-forward"></i></div>
                            {/* <div className="shuffle"><i className="fas fa-random"></i></div> */}
                            {/* <div className="add"><i className="fas fa-plus"></i></div> */}
                        </div>
                    </div>
                ) : (
                    <p><Link to="/settings">go to settings to log in to Spotify</Link></p>
                    )
                }
            </div>
        )
    }
}

export default Music;