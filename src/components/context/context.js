import React, { Component, Fragment } from 'react';

/** Стандартное пробрасывание
const ChildThree = (props) => <h1>{ props.children }</h1>;
const ChildTwo = (props) => <ChildThree { ...props} />;
const ChildOne = (props) => <ChildTwo { ...props} />;

export default class Lesson extends Component {
    render () {
        return (
            <ChildOne>
                Hello React
            </ChildOne>
        );
    };
}; 
*/

const TitleContext = React.createContext();

const ChildThree = () => (
    <TitleContext.Consumer>
        {/* Если передаем 1 пропс в value
        { title => <h1>{ title }</h1> }
        */}
        { ({ title, subTitle, click }) => (
            <Fragment>
                <h1 onClick={click}>{ title }</h1>
                <h2>{ subTitle }</h2>
            </Fragment>
        ) }
    </TitleContext.Consumer>
);
const ChildTwo = () => <ChildThree />;
const ChildOne = () => <ChildTwo />;

export default class Lesson extends Component {

    state = {
        click: 0
    }

    render () {
        return (
            // Если передаем 1 пропс в value
            // <TitleContext.Provider value="Hello React"> 
            <TitleContext.Provider value={
                {
                    title: 'Hello React',
                    subTitle: 'This is Context Baby',
                    click: () => {
                        console.log('Click');
                        this.setState( ({ click }) => ({
                            click: click + 1
                        }) )
                    }
                }
            }>
                <ChildOne />
            </TitleContext.Provider>
        );
    };
}; 