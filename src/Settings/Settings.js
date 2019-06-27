import React, {Component} from 'react';
import './Settings.css';
import Spotify from '../spotify'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spotify: Spotify
        }
        this.playerCheckInterval = null;
      }
    reset() {
        localStorage.removeItem("names");
    }
    render() {
        console.log("Settings: ",Spotify)
        let lsName;
        if (localStorage.names) {
            lsName = localStorage.getItem('names').replace(/"/g,"");
        }
        return (
            <div className="settings-grid">
                <div className="block one">
                    <div className="name-heading">Change display name</div>
                    <br></br>
                    { localStorage.names ? (
                        <span className="name-change">{lsName} <span className="remove-name" onClick={this.reset}>&nbsp;&nbsp;&#8594;&nbsp;&nbsp;reset</span></span>
                    ) : (
                        <div className="name-change remove-name">&#8592; Enter your name in the space provided on the Menu.</div>
                    )}
                </div>

                <div className="block two">
                    <div className="name-heading">Add a link to your calendar</div>
                    <br></br>
                    <input className="cal-link"
                        value={this.props.calendarHref}
                        onChange={x => this.props.addHref(x)}
                    />
                </div>

                <div className="block three">
                    {this.state.spotify.error && <p>Error: {this.state.spotify.error}</p>}
                    { !this.state.spotify.loggedIn ? (
                        <div className="App-intro">
                            Get your Spotify access token. <br></br>&#8595;
                            <a href="https://beta.developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify" target="_blank" rel="noopener noreferrer">here</a>.
                            Enter your Spotify access token.<br></br>&#8595;<br></br>
                            <input
                                onChange={e => this.setState({ token: e.target.value })}
                            />
                            <br></br><br></br>
                            <button onClick={() => this.state.spotify.handleLogin(this.state.token)}>Go</button>
                        </div>
                    ) : (
                        <div>You are currently logged in to Spotify. Refresh the browser if you need to enter a new Web Token.</div>
                    )}
                </div>
            </div>
        )
    }
}

export default Settings;