import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppLinkHOC } from './../HOC/index';

const App = AppLinkHOC(NavLink);

export default class Menu extends Component {

    render () {
        return (
            <header>
                <nav>
                    <App exact to="/" >News</App>
                    <App exact to="/reference" >Reference</App>
                    <App to="/lesson" >Lesson</App>
                    <App to="/lesson/news" >Lesson</App>
                </nav>
            </header>
        );
    };
};