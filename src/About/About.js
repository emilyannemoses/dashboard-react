import React, {Component} from 'react';
import './About.css';
import {Link} from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="headline">About the developer:
                    <a className="linkMe" href="http://emilyannemoses.com" rel="noopener noreferrer" target="_blank">Emily Anne Moses</a>
                </div>
                <div>
                    <p>
                        I've been a professional software developer for four years and counting. I've worked on enterprise software in Python, Go and JavaScript.  
                        I was first introduced to React in 2016, and proceeded to use it to create a form component on an already functioning web application. 
                        Since then I've worked with AngularJS, RiotJS, VueJS and LoneJS.  
                    </p>
                    <p>
                        All frameworks are more or less the same, but in picking up where I left off with React I'm impressed by how far it has come!
                        I decided to use React Router 4 for this project, and I'm really happy with the performance. I'm also a <i>widget dashboard enthusiast</i> and I've <a href="https://eamoses.github.io/widget-dashboard/" rel="noopener noreferrer" target="_blank">made one before based on the Momentum Dash design.</a>
                    </p>
                </div>
                <div>
                    <p>
                        I am not a designer.  Fortunately, people with beautiful design chops exist, and for this project I borrowed Julie Park's <a href="https://codepen.io/juliepark/pen/KLWmxO" rel="noopener noreferrer" target="_blank">CodePen</a> and build functionality into it!
                    </p>
                </div>
                <div>
                    <p>
                        The widget dashboard first saves your name to your local storage. This can be deleted and reset in the Settings component. 
                        The widget uses a weather API through the browser to find the your location and current weather as long as you approve these settings. It also displays the current time and date.
                        You have the option to link a personal online Calendar if you wish. The To-do list saves the items to local storage, and these items are deleted when checked off.
                    </p>
                    <p>
                        Implementation of the Spotify API was the most complex. I hadn't worked with this API since 2016 and it has changed drastically!  
                        Follow the directions in the Settings. You must first get a <a href="https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#" target="_blank" rel="noopener noreferrer">Web Playback SDK Access Token</a> by logging in to your Spotify account on their website.
                        My dashboard will then automatically load and play your most current playlist.
                    </p>
                </div>
                <div>
                    <p>
                        If you'd like to get in touch, please don't hesitate to <Link to="/contact">Contact me!</Link> I'm always excited to meet other enthusiasts!
                    </p>
                </div>
            </div>
        )
    }
}

export default About;