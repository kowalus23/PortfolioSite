import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';


const firstImage = require('../images/first.jpg');
const secondImage = require('../images/second.jpg');
const thirdImage = require('../images/third.jpg');


export class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolio">
                <div className="portfolio-content-container">
                    <div onClick={()=> window.open("./ProjektZaliczenie/index.html", "_self")} className="portfolio-content portfolio-first">
                        <img src={firstImage} alt=""/>
                        <h2>Project <span>1</span></h2>
                        <p>Website + Game</p>
                    </div>
                    <div onClick={()=> window.open("./SitOnChair/index.html", "_self")} className="portfolio-content portfolio-second">
                        <img src={secondImage} alt=""/>
                        <h2>Project <span>2</span></h2>
                        <p>My first layout</p>
                    </div>
                    <div onClick={()=> window.open("LINK3", "_self")} className="portfolio-content portfolio-third">
                        <img src={thirdImage} alt=""/>
                        <h2>Project <span>3</span></h2>
                        <p>Example...</p>
                    </div>
                    <div className="portfolio-content portfolio-fourth">
                        <img src="" alt=""/>
                        <h2>Project <span>4</span></h2>
                        <p>Example...</p>
                    </div>
                    <div className="portfolio-content portfolio-fifth">
                        <img src="" alt=""/>
                        <h2>Project <span>5</span></h2>
                        <p>Example...</p>
                    </div>
                    <div className="portfolio-content portfolio-sixth">
                        <img src="" alt=""/>
                        <h2>Project <span>6</span></h2>
                        <p>Example...</p>
                    </div>
                    <div className="portfolio-content portfolio-seventh">
                        <img src="" alt=""/>
                        <h2>Project <span>7</span></h2>
                        <p>Example...</p>
                    </div>
                    <div className="portfolio-content portfolio-eighth">
                        <img src="" alt=""/>
                        <h2>Project <span>8</span></h2>
                        <p>Example...</p>
                    </div>
                    <div className="portfolio-content portfolio-ninth">
                        <img src="" alt=""/>
                        <h2>Project <span>9</span></h2>
                        <p>Example...</p>
                    </div>
                </div>
                <div className="return-btn">
                    <Link to="/">
                        <button><span>RETURN</span></button>
                    </Link>
                </div>

            </div>
        );
    }
}