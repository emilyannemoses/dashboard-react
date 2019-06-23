import React, {Component} from 'react';
import {
    NavLink,
    Route
} from 'react-router-dom';
import menu from './Menu.css';
import Home from '../Home/Home'
import Settings from '../Settings/Settings'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Greeting from '../Home/Greeting/Greeting'

class Menu extends Component {

    render() {
        return (
            <div>
                <div className="leftside-menu menu" id="menu">
                    <Greeting
                        nameVal={this.props.nameVal}
                        setNameState={this.props.setNameState}
                        greetingToggle={this.props.greetingToggle}
                        poopFunc={this.props.poopFunc}
                    />
                    <NavLink className="item" exact to="/" activeStyle={{ menu }}>home</NavLink>
                    <NavLink className="item" exact to="/settings" activeStyle={{ menu }}>settings</NavLink>
                    <NavLink className="item" exact to="/about" activeStyle={{ menu }}>about</NavLink>
                    <NavLink className="item" exact to="/contact" activeStyle={{ menu }}>contact</NavLink>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </div>
            </div>
        );
    }
}

export default Menu;