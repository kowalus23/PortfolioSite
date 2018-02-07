import React from 'react';

export class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <div className="popup-title">
                        <h1>{this.props.text}</h1>
                        <button onClick={this.props.closePopup}>CLOSE</button>
                    </div>
                    <div className="popup-content">
                        <h1><sub>form</sub>CONTENT</h1>
                    </div>
                </div>
            </div>
        );
    }
}