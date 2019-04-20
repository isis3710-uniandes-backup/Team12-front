import React, {Component} from 'react';
import '../App.css';
import {FormattedMessage } from 'react-intl';


export default class Footer extends Component {
    render(){
        return(
            <div className="copy-right"> 
                <div className="container">
                    <p>
                        <FormattedMessage id="footer"/>
                        <a href="http://w3layouts.com"> W3layouts.</a>
                    </p>
                </div>
            </div>
        );
    }
}