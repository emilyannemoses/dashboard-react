import React, {Component} from 'react';
import './Settings.css';

class Settings extends Component {
    reset() {
        localStorage.removeItem("names");
    }
    render() {
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
                    Log in to Spotify
                </div>
            </div>
        )
    }
}

export default Settings;