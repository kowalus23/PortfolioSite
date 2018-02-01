import React from 'react';

export class Title extends React.Component {
    render() {
        return(
            <div className="col1-2 col1">
                <div className="title">
                    <h1>Portfolio<span>.</span><sup>2018</sup></h1>
                    <h2>it<span>'</span>s coding time<span>!</span></h2>
                    <button><p>CONTACT ME</p><p>-></p></button>
                    <div className="fav-icons"> fav icons </div>
                </div>

            </div>
        )
    }
}