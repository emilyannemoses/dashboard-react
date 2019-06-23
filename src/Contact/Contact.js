import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <div className="contact-header">
                    Contact me
                </div>
                <div className="contact-form">
                    <div id="contact" className="centered">
                        <div className="formContainer">
                            <form method="POST" action="https://formspree.io/eamoses@gmail.com">
                                <fieldset>
                                    <label htmlFor="name">NAME</label>
                                    <input type="text" id="name" name="user_name" />
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="email" id="mail" name="user_email" />
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="bio">MESSAGE</label>
                                    <textarea id="bio" name="user_bio"></textarea>
                                </fieldset>
                                <button type="submit" className="submit">SEND</button>
                                <button type="reset" className="reset">RESET</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;