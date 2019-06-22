import React, {Component} from 'react';
import { BrowserRouter as Router, 
    Route,
    NavLink, 
    Link } from 'react-router-dom';
import menu from './Menu.css';

class Menu extends Component {
    constructor(props) {
      super(props)
      this.state = {
        active: 'Home',
        menuItems: [
            'Home',
            'Settings',
            'About',
            'Contact'
        ]
      }
    }

    _toggleMenu = (menuItem) => {
        const menuContainer = document.getElementById('menu');
        const items = menuContainer.getElementsByClassName('item');
        items = Array.from(items);
        items.forEach(function(item){
            item.addEventListener('click', function(){
                let current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(' active', '');
                this.className += ' active';
            });
        });
        this.setState({ active: menuItem });
    }

    render() {
        return (
            <div className="leftside-menu">
                {/* CREATE GREETING COMPONENT FOR BELOW */}
                <div className="user">
            	    <div id="greetingContainer">
                        <div className="text">Please enter your full name</div>
                        <input id="name" type="text" />
                    </div>
                    <div id="greetingDisplay" className="greeting" style={{display:'none'}}></div>
                </div>
                <nav className="menu" id="menu">
                    <Router>
                        <li><NavLink className="item" to="/home" activeStyle={{ menu }}>home</NavLink></li>
                        <li><NavLink className="item" to="/settings" activeStyle={{ menu }}>settings</NavLink></li>
                        <li><NavLink className="item" to="/about" activeStyle={{ menu }}>about</NavLink></li>
                        <li><NavLink className="item" to="/contact" activeStyle={{ menu }}>contact</NavLink></li>
                    </Router>
                </nav>
            </div>
        )
    }
}

export default Menu;