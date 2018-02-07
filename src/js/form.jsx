import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';


export class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <div className="form-title">
                    <h1> Hello World - that's my form of contact </h1>
                </div>
                <div className="form-content">

                </div>
                <div className="return-btn">
                    <Link to="/">
                        <button><span>RETURN</span></button>
                    </Link>
                </div>

            </div>

        )
    }
}