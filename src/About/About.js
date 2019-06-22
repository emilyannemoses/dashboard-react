import React, {Component} from 'react';
import './About.css';
import {Link} from 'react-router-dom';
import Contact from '../Contact/Contact'

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="headline">About the developer:
                    <a className="linkMe" href="http://emilyannemoses.com" target="_blank">Emily Anne Moses</a>
                </div>
                <div>
                    <p>
                        I've been a professional software developer for four years and counting. I've worked on enterprise software in Python, Go and JavaScript.  
                        I was first introduced to React in 2016, and proceeded to use it to create a form component on an already functioning web application. 
                        Since then I've worked with AngularJS, RiotJS, VueJS and LoneJS.  
                    </p>
                    <p>
                        All frameworks are more or less the same, but in picking up where I left off with React I'm impressed by how far it has come!
                        I decided to use React Router 4 for this project, and I'm really happy with the performance. I'm also a <i>widget dashboard enthusiast</i> and I've <a href="https://eamoses.github.io/widget-dashboard/" target="_blank">made one before based on the Momentum Dash design.</a>
                    </p>
                </div>
                <div>
                    <p>
                        I am not a designer.  Fortunately, people with beautiful design chops exist, and for this project I borrowed Julie Park's <a href="https://codepen.io/juliepark/pen/KLWmxO" target="_blank">CodePen</a> and build functionality into it!
                    </p>
                </div>
                <div>
                    <p>
                        The widget dashboard first saves the user's name to the user's local storage. This can be deleted and reset in the Settings component. 
                        The widget uses a weather API through the browser to find the users location and current weather. It also displays the current time and date.
                        The user has the option to link a Google Calendar if they wish. 
                    </p>
                    <p>
                        The To-do list saves the items to local storage, and these items can be checked off or deleted.
                        Implementation of the Spotify API was the most complex. I hadn't worked with this API since 2016 and it has changed drastically!  To log in, go to the Settings tab and log in with your Spotify login credentials. It will then load and play your most current playlist.
                    </p>
                </div>
                <div>
                    <p>
                        If you'd like to get in touch, please don't hesitate to <Link to="/contact" component={Contact}>Contact me!</Link> I'm always excited to meet other enthusiasts!
                    </p>
                </div>
            </div>
        )
    }
}

export default About;