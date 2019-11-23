import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export default class MyPortal extends Component {

    el = document.createElement('div');

    componentDidMount () {
        document.body.appendChild(this.el);
    };
    componentWillUnmount () {
        document.body.removeChild(this.el);
    };

    render () {
        const childrenComponent = (
            <Fragment>
                <div>TEST PORTAL</div>
                <button>Click</button>
            </Fragment>
        );
        // return ReactDOM.createPortal(this.props.children, this.el);
        return ReactDOM.createPortal(childrenComponent, this.el);
    };
};

/**
class Lesson extends Component {

    state = {
        counter: 0
    }

    onClick = () => {
        this.setState( ({ counter }) => ({
            counter: counter + 1
        }) );
    }

    render () {
        const { counter } = this.state;
        return (
            <div onClick={ this.onClick }>
                <span>{ counter }</span>
                <MyPortal>
                    <div>TEST PORTAL</div>
                    <button>Click</button>
                </MyPortal>
            </div>
        );
    };
};
 */