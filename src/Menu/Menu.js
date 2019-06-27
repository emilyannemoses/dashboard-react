import React, {Component} from 'react';
import {
    NavLink,
    Route,
    Switch
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
                        toggleName={this.props.toggleName}
                    />
                    <NavLink className="item" exact to="/" activeStyle={{ menu }}>home</NavLink>
                    <NavLink className="item" exact to="/settings" activeStyle={{ menu }}>settings</NavLink>
                    <NavLink className="item" exact to="/about" activeStyle={{ menu }}>about</NavLink>
                    <NavLink className="item" exact to="/contact" activeStyle={{ menu }}>contact</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" render={(props) => 
                            <Home {...props}
                                calendarHref={this.props.calendarHref}
                                addHref={this.props.addHref}
                            />}
                        />
                        <Route exact path="/settings" render={(props) => 
                            <Settings {...props}
                                calendarHref={this.props.calendarHref}
                                addHref={this.props.addHref}
                            />}
                        />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Menu;