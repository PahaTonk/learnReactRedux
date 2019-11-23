import React, { Component } from 'react';

const AppLinkHOC = (Link) => {
    return class extends Component {

        onClick = () => {
            console.log('new click Handler')
        }

        render () {
            const props = this.props;

            return <Link { ...props } onClick={ this.onClick } className="active" />
        }
    }
}


export default AppLinkHOC;