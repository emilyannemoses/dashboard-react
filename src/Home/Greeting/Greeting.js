import React, {Component} from 'react';
import './Greeting.css';

class Greeting extends Component {
    render() {
        let lsName = localStorage.getItem('names').replace(/\"/g, "");
        return (
            <div>
                <div className="user">
                    { (lsName.length > 0)  ? (
                        <div id="greetingDisplay" className="greeting">{lsName}</div>
                    ) : (
                        <div id="greetingContainer">
                            <div className="text">Please enter your full name</div>
                            <div className="name"><input id="name" value={this.props.nameVal} onKeyPress={this.props.poopFunc} onChange={char => this.props.setNameState(char)} /></div>
                        </div>
                    ) }
                </div>
            </div>
        )
    }
}

export default Greeting;