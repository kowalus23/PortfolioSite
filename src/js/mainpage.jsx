import React from 'react';
import {Title} from "./title.jsx";
import {Menu} from "./menu.jsx";
import {Portfolio} from "./portfolio.jsx";
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import {Form} from "./form.jsx";
import {About} from "./about.jsx";


export class MainPage extends React.Component {
    render(){
        return(
            <div className="content-container shadow">
                <div className="margin-container">
                    <Title/>
                    <Router history={hashHistory}>
                        <Route path='/' component={Menu}/>
                        <Route path='/about' component={About}/>
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/form' component={Form}/>
                    </Router>
                </div>
            </div>
        )
    }
}