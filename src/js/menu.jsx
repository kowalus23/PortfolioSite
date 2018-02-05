import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';


export class Menu extends React.Component {
    render() {
        return (
            <div className="col1-2 col2">
                <div className="menu">
                    <div className="menu-col1">
                        <div>
                            <Link to="/about"><button className="about-btn"><span>ABOUT</span></button></Link>
                        </div>
                        <div>
                            <Link to="/portfolio"><button className="projects-btn"><span>PROJECTS</span></button></Link>
                        </div>
                        <div>
                            <Link to="/form"><button className="ask-btn"><span>ASK ME</span></button></Link>
                        </div>
                    </div>
                    <div className="menu-col2">
                        <div className="list-wrapper">
                            <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                                <circle cx="170" cy="170" r="160" stroke="tomato"/>
                                <circle cx="170" cy="170" r="135" stroke="#404041"/>
                                <circle cx="170" cy="170" r="110" stroke="#F96246"/>
                                <circle cx="170" cy="170" r="85" stroke="#404041"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}