import React from 'react';
import {SpiralText} from "./mainpageAbout.jsx";

export class Menu extends React.Component {
    render() {
        return (
            <div className="col1-2 col2">
                <div className="menu">
                    <div className="menu-col1">
                        <div><button className="about-btn"><span>ABOUT</span></button></div>
                        <div><button className="projects-btn"><span>PROJECTS</span></button></div>
                        <div><button className="ask-btn"><span>ASK</span></button></div>
                    </div>
                    <div className="menu-col2">
                        <div className="list-wrapper">
                        <SpiralText/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}