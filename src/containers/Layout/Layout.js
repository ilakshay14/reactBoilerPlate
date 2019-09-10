import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

import classes from './Layout.css';

class Layout extends Component {

    state = {
        textValue: '',
    }

    buttonOnClickHandler = () => {
        alert(this.state.textValue);
    }

    textValueChangeHandler = (event) => {
        this.setState({
            textValue: event.target.value
        });
    }

    render() {

        const textValue = this.state.textValue;

        return (
            <div className={"form-inline Layout"}>
                <Button
                    class={"btn btn-success"}
                    clicked={this.buttonOnClickHandler}
                >
                    Click
                </Button>
                <Input
                    type={"text"}
                    id={"username"}
                    class={"form-control"}
                    value={textValue}
                    textChanged={this.textValueChangeHandler}
                ></Input>
            </div>
        );
    }
}

export default Layout;