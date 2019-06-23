import React from 'react';
import './Music.css'

function Music() {
    return (
        <div>
            <div className="music">
                now playing on spotify
            </div>
                <div className="info">
                <div className="progress-bar">
                    <div className="time--current">1:25</div>
                    <div className="time--total">-3:25</div>
                    <div className="fill"></div>
                </div>
                <div className="currently-playing">
                    <h2 className="song-name">Paris in the Rain</h2>
                    <h3 className="artist-name">Lauv</h3>
                </div>
                <div className="controls">
                    <div className="option"><i className="fas fa-bars"></i></div>
                    <div className="volume"><i className="fas fa-volume-up"></i></div>
                    <div className="previous"><i className="fas fa-backward"></i></div>
                    <div className="play"><i className="fas fa-play"></i></div>
                    <div className="next"><i className="fas fa-forward"></i></div>
                    <div className="shuffle"><i className="fas fa-random"></i></div>
                    <div className="add"><i className="fas fa-plus"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Music;