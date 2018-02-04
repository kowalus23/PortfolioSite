import React from 'react';
import {Typer} from "./typer.jsx";


export class Title extends React.Component {
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
                    <button><p>CONTACT ME</p><p>-></p></button>
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