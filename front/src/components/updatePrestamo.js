import React, { Component } from 'react'
import axios from 'axios'
import { FormattedMessage } from 'react-intl';
import ApiHelper from './ApiHelper';
export class updatePrestamo extends Component {

  api = new ApiHelper();

  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      usuario: JSON.parse(localStorage.getItem("user")),
      prestamo: {},
      id: ""
    }
  }

  componentDidMount = () => {

    axios.get(`http://52.3.50.151:3001/users/${this.state.usuario.id}/prestamos/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ startDate: res.data.startDate, endDate: res.data.endDate, id: res.data.id })
      })/*
    this.api.getLoan(this.props.match.params.id)
      .then(res => {
        console.log("Este es el obtener uno del update");
        console.log(res);
        //this.setState({ startDate: res.data.startDate, endDate: res.data.endDate, id: res.data.id });
      });*/

  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  update = (prestamo) => {
    console.log(prestamo)
        axios.put(`http://52.3.50.151:3001/users/${this.state.usuario.id}/prestamos/${this.state.id}`, prestamo)
          .then(res => {
            console.log(res.data)
          });
        /*
    this.api.updateLoan(prestamo)
      .then(res => {

        console.log("Este es el update del update");
        console.log(res);
      });
*/
  }

  render() {
    console.log(this.state.usuario.id)
    return (
      <div>
        <div className="container">
          <h2><FormattedMessage id="prestamos.update" /><span>{" "}</span><FormattedMessage id="prestamo" /></h2>

          <form onSubmit={() => this.update({ id: this.state.id, startDate: this.state.startDate, endDate: this.state.endDate })}>
            <div className="form-group">
              <label htmlFor="startDate"><FormattedMessage id="prestamos.sd" /> </label>
              <input name="startDate" value={this.state.startDate} className="form-control" id="startDate" type="date" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="endDate"><FormattedMessage id="prestamos.ed" /> </label>
              <input name="endDate" value={this.state.endDate} className="form-control" id="endDate" type="date" onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary"><FormattedMessage id="prestamos.submit" /></button>
          </form>
        </div>
      </div>
    )
  }
}

export default updatePrestamo