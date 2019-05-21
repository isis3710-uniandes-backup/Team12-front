import React, { Component } from 'react';
import '../App.css';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

export default class Category extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      carrito: []
    }
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    if ("lista" in window.localStorage) {
      let cats = JSON.parse(window.localStorage.getItem("lista"))
      for (const act of cats) {
        if (act["id"] === this.props.match.params.categoryID) {
          this.setState({
            items: act["objects"]
          })
          break;
        }
      }
    }
    else {
      if (navigator.onLine) {
        fetch(`http://localhost:3001/objetos/category/${this.props.match.params.categoryID}`).then(
          response => response.json()
        ).then(
          data => {
            this.setState({
              items: data
            });
          }
        ).catch(error => {
          console.log(error);
        })
      }
    }

    console.log(this.props)
  }

  add(item) {
    console.log("Hice algo");
    const { carrito } = this.state;
    this.setState({ carrito: [...carrito, item] });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    var prueba = JSON.parse(localStorage.getItem("carrito"));
    console.log(prueba);
  }

  renderItemList() {
    //Map de los objetos en list, cada uno es una fila
    return (this.state.items.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{(item.rating) ? item.rating : <FormattedMessage id="noRateTag" />}</td>
          <td>{(item.available) ? <FormattedMessage id="availableTag" /> : <FormattedMessage id="noAvailableTag" />}</td>
          <td>{item.description}</td>
          <td>
            <button type="button" className="btn btn-block" aria-label="Left Align" style={{ backgroundColor: "lightGreen", border: "1px solid black", padding: "7px", fontWeight: "bolder" }} onClick={() => this.add(item)}>+</button>
          </td>
          <td>
            <NavLink to={`/item/${item.id}`}>
              <div style={{ border: "1px solid black", textAlign: "center", paddingTop: "3px", paddingBottom: "3px", backgroundColor: "lightBlue", color: "black" }}>
                <FormattedMessage id="goObjDet" />
              </div>

            </NavLink>
          </td>
        </tr>
      )
    }));
  };

  render() {
    return (
      <div className="container">


        <h1>
          <FormattedMessage id="allObjC" />
        </h1>
        <hr />
        <div>
          <table className="table table-bordered table-responsive" >
            <thead className="table-active">
              <tr>
                <th>
                  <FormattedMessage id="tItemName" />
                </th>
                <th>
                  <FormattedMessage id="tItemPrice" />
                </th>
                <th>
                  <FormattedMessage id="tItemRate" />
                </th>
                <th>
                  <FormattedMessage id="tItemAv" />
                </th>
                <th>
                  <FormattedMessage id="tItemDes" />
                </th>
                <th>
                  <FormattedMessage id="addItem" />
                </th>
                <th>
                  <FormattedMessage id="objDet" />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.length === 0 ?
                <tr>
                  <td colSpan="7">
                    {(navigator.onLine || "lista" in window.localStorage ? <FormattedMessage id="empty" /> : <FormattedMessage id="no-conn" />)}
                  </td>
                </tr>
                : this.renderItemList()}

            </tbody>

          </table>
          <NavLink to="/categories">
            <div style={{ width: "inherit", border: "1px solid black", backgroundColor: "red", color: "white", textAlign: "center" }}>
              <FormattedMessage id="back" />
            </div>
          </NavLink>
        </div>

      </div>
    );
  }
}