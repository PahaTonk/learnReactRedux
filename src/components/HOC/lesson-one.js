import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AppLinkHOC = (props) => ({
    render: () => (
        <Link { ...props } className="active" />
    )
});

export default class Lesson extends Component {

    render () {
        return (
            <Router>
                <nav>
                    <AppLinkHOC to="/" >Home</AppLinkHOC>
                    <AppLinkHOC to="/portfolio" >Portfolio</AppLinkHOC>
                    <AppLinkHOC to="/contacts" >Contacts</AppLinkHOC>
                </nav>
            </Router>
        );
    };
};