import React, { Component, Fragment } from 'react';

export default class Reference extends Component {
    state = {
        inputValue: '',
        textareaValue: ''
    }

    input = React.createRef();
    textarea = React.createRef();

    changeHandler = () => {
        this.setState({
            inputValue: this.input.current.value.toUpperCase(),
            textareaValue: this.textarea.current.value.toUpperCase()
        })
    }

    render () {
        const { inputValue, textareaValue } = this.state;

        return (
            <Fragment>
                <input type="text" 
                    name="name"
                    onChange={ this.changeHandler }
                    value={ inputValue }
                    ref={ this.input } />

                <textarea name="textarea"
                    onChange={ this.changeHandler }
                    value={ textareaValue }
                    ref={ this.textarea } />
            </Fragment>
        );
    }
}