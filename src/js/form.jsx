import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';


export class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <div className="form-title">
                    <h1>Contact<sub>form</sub></h1>
                </div>
                <div className="form-content">
                    <form>
                        <ul className="form-style-1">
                            <li><label>Full Name <span className="required">*</span></label><input type="text"
                                                                                                   name="field1"
                                                                                                   className="field-divided"
                                                                                                   placeholder="First"/>&nbsp;
                                <input type="text" name="field2" className="field-divided" placeholder="Last"/></li>
                            <li>
                                <label>Email <span className="required">*</span></label>
                                <input type="email" name="field3" className="field-long" placeholder="example@test.pl"/>
                            </li>
                            <li>
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
                <div className="return-btn">
                    <Link to="/">
                        <button><span>RETURN</span></button>
                    </Link>
                </div>

            </div>

        )
    }
}