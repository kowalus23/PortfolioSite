import React from 'react';
import {Typer} from "./typer.jsx";
import {Popup} from "./popupform.jsx";


export class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div className="col1-2 col1">
                <div className="signature">
                    <p>Patryk Kowalski</p>
                </div>
                <div className="title">
                    <h1>Portfolio<span>.</span><sup>2018</sup></h1>
                    <h2><Typer strings={[
                        'Welcome on my website :)',
                        'It\'s coding time!',
                    ]}/></h2>
                    <div className="popup-wrapper">
                        <button onClick={this.togglePopup.bind(this)}><p>CONTACT ME</p><p>-></p></button>
                        {this.state.showPopup ? <Popup text='FORM' closePopup={this.togglePopup.bind(this)}/> : null}
                    </div>
                    <div className="fav-icons">
                        <a href="https://www.facebook.com/kowalus23" target="_blank">
                            <div className="fb-icon icon-list"/>
                        </a>
                        <a href="https://www.linkedin.com/in/patryk-kowalski
" target="_blank">
                            <div className="in-icon icon-list"/>
                        </a>
                        <a href="https://github.com/kowalus23" target="_blank">
                            <div className="git-icon icon-list"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}