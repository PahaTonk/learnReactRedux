import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppLinkHOC } from './../HOC/index';

const App = AppLinkHOC(Link);

export default class Menu extends Component {

    render () {
        return (
            <Router>
                <nav>
                    <App to="/" >Home</App>
                    <App to="/portfolio" >Portfolio</App>
                    <App to="/contacts" >Contacts</App>
                    <App to="/about-as" >About-as</App>
                </nav>
            </Router>
        );
    };
};