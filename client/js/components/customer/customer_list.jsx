"use strict";

import React              from "react";
import BaseComponent      from "../base_component";
require('../../../styles/styles.scss');

var listData;

export default class CustomerList extends BaseComponent {

  constructor(props,context) {
    super(props, context);

    this.props = props;
    listData = this.props.listData;
  }

  render(){
    return(
      <div className="mdl-cell mdl-cell--4-col">
        <h4>Customers</h4>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp list-min-width">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Invoice</th>
              <th className="mdl-data-table__cell--non-numeric">Company</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {listData.map(function(customer, idx) {
              return (
                <tr key={idx} onClick={this.props.onListRowSelect.bind(this, customer)}>
                  <td className="mdl-data-table__cell--non-numeric">{customer.companyName}</td>
                  <td className="mdl-data-table__cell--non-numeric">{customer.contactName}</td>
                  <td className="mdl-data-table__cell--non-numeric">{customer.contactNumber}</td>
                </tr>
              );
            }, this)}
          </tbody>
        </table>
      </div>
    );
  }
}
