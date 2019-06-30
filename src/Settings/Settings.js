import React, {Component} from 'react';
import './Settings.css';
import Spotify from '../spotify'
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import axios from 'axios';
import hash from "../hash";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spotify: Spotify
        }
        this.playerCheckInterval = null;
    }
    componentDidMount() {
        let _token = hash.access_token
        if (_token) {
          this.setState({
            token: _token,
            playing: true
          });
            if (!Spotify.playing) {
                this.getUserInfo(_token);
            }
        }
    }
    getUserInfo(token) {
        axios.get('https://api.spotify.com/v1/me/', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then( (response) => {
          this.setState({
            user: {
              name: `${response.data.display_name}`,
              username: `${response.data.id}`,
              email: `${response.data.email}`,
              location: `${response.data.country}`
            },
            token: token,
          })
          Spotify.handleLogin(token)
        })
        .catch( (error) => {
          console.log(error);
        })
        .then( () => {
        })
    }
    reset() {
        localStorage.removeItem("names");
        window.location.href="https://eamoses.github.io/dashboard-react";
    }
    render() {
        let lsName;
        if (localStorage.names) {
            lsName = localStorage.getItem('names').replace(/"/g,"");
        }
        const isPlaying = this.state.playing;
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
                    { !isPlaying ? (
                        <div className="App-intro">
                            <a className="btn btn--loginApp-link" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Log in to Spotify</a>
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