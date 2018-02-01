import React from 'react';
import {Title} from "./title.jsx";
import {Menu} from "./menu.jsx";

export class MainPage extends React.Component {
    render(){
        return(
            <div className="content-container">
                <div className="margin-container">
                    <Title/>
                    <Menu/>

                </div>

            </div>
        )
    }
}