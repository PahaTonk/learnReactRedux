import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/menu/menu';


import { News } from './components/API/index';
import Reference from './components/reference';
import Lesson from './components/context';

export default class App extends Component {
    render () {
        const { children } = this.props;

        return (
            <Fragment>
                <Menu/>
                <main>
                    { children }
                </main>
            </Fragment>
        )
    }
}
const Error = () => <h1>404 Error</h1>;

ReactDOM.render(
<BrowserRouter>
    <App>
        <Switch>
            <Route exact path='/' component={ News } />
            <Route exact path='/reference' component={ Reference } />
            <Route exact path='/lesson' component={ Lesson } />
            <Route path='/lesson/news' component={ News } />
            <Route path='*' component={ Error } />
        </Switch>
    </App>
</BrowserRouter>, document.querySelector('#root'));