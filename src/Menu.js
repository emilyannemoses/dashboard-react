import React, {Component} from 'react';
import { BrowserRouter as Router, 
    NavLink
    } from 'react-router-dom';
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

    // _toggleMenu = (menuItem) => {
    //     const menuContainer = document.getElementById('menu');
    //     let items = menuContainer.getElementsByClassName('item');
    //     items = Array.from(items);
    //     items.forEach(function(item){
    //         item.addEventListener('click', function(){
    //             let current = document.getElementsByClassName('active');
    //             current[0].className = current[0].className.replace(' active', '');
    //             this.className += ' active';
    //         });
    //     });
    //     this.setState({ active: menuItem });
    // }

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
                <div className="menu" id="menu">
                    <Router>
                        <NavLink className="item" to="/home" activeStyle={{ menu }}>home</NavLink>
                        <NavLink className="item" to="/settings" activeStyle={{ menu }}>settings</NavLink>
                        <NavLink className="item" to="/about" activeStyle={{ menu }}>about</NavLink>
                        <NavLink className="item" to="/contact" activeStyle={{ menu }}>contact</NavLink>
                    </Router>
                </div>
            </div>
        )
    }
}

export default Menu;