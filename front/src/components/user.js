import React, {Component} from 'react';

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
                            <td>Nombre completo</td>
                            <td>{ `${this.props.name}${this.props.lastname}` }</td>
                        </tr>
                        <tr>
                            <td>Correo</td>
                            <td>{this.props.email}</td>
                        </tr>
                        <tr>
                            <td>Celular</td>
                            <td>{this.props.phone}</td>
                        </tr>
                        <tr>
                            <td>Direccion</td>
                            <td>{this.props.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}