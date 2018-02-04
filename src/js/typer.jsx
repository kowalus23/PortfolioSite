
import React from "react";
import Typed from "typed.js";

export class Typer extends React.Component {

    componentDidMount() {
        const {strings} = this.props;
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (<span style={{marginLeft: '10px'}} ref={(el) => {
                this.el = el;
            }}/>
        );
    }
}