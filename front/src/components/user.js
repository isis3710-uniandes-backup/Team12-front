import React, {Component} from 'react';
import {FormattedMessage } from 'react-intl';

export default class UserProf extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <FormattedMessage id="userName"/>
                            </td>
                            <td>{ `${this.props.name}${this.props.lastname}` }</td>
                        </tr>
                        <tr>
                            <td>
                                <FormattedMessage id="userEmail"/>
                            </td>
                            <td>{this.props.email}</td>
                        </tr>
                        <tr>
                            <td>
                                <FormattedMessage id="userPhone"/>
                            </td>
                            <td>{this.props.phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <FormattedMessage id="userAdd"/>
                            </td>
                            <td>{this.props.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}