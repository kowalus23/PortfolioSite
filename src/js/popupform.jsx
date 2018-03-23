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
                        <form>
                            <ul className="form-style-1">
                                <li><label>Full Name <span className="required">*</span></label><input type="text"
                                                                                                       name="field1"
                                                                                                       className="field-divided"
                                                                                                       placeholder="First"/>&nbsp;
                                    <input type="text" name="field2" className="field-divided" placeholder="Last"/></li>
                                <li>
                                    <label>Email <span className="required">*</span></label>
                                    <input type="email" name="field3" className="field-long"
                                           placeholder="example@test.pl"/>
                                </li>
                                <li className="form-style-sub">
                                    <label>Subject</label>
                                    <select name="field4" className="field-select">
                                        <option value="Advertise">Offer / cooperation</option>
                                        <option value="Partnership">Question</option>
                                        <option value="General Question">Issue</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Your Message <span className="required">*</span></label>
                                    <textarea className="field5 field-long field-textarea" id="field5"
                                              placeholder="Write text here..."/>
                                </li>
                                <li>
                                    <input type="submit" value="Submit"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}