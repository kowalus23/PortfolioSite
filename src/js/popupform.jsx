import React from 'react';

export class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="popup-title">
                        <h1>{this.props.text}</h1>
                        <button onClick={this.props.closePopup}>close me</button>
                    </div>
                    <div className="popup-content">
                        form
                    </div>
                </div>
            </div>
        );
    }
}