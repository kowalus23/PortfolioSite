import React from 'react';
import {Title} from "./title.jsx";
import {Menu} from "./menu.jsx";
import {Portfolio} from "./portfolio.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Form} from "./form.jsx";
import {About} from "./about.jsx";


export class MainPage extends React.Component {
    render() {
        return (
            <div className="content-container shadow">
                <div className="margin-container">
                    <Title/>
                    <Router>
                        <Switch location={location}>
                            <Route exact path='/' component={Menu}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/portfolio' component={Portfolio}/>
                            <Route exact path='/form' component={Form}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}