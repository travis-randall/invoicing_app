// CurrentInvoiceList.jsx
//   Provide the list of current invoices
"use strict";
import React from "react";
import BaseComponent from "../base_component";
import _ from "lodash";

var listData;

export default class CurrentInvoiceList extends BaseComponent {
  constructor(props,context) {
    super(props,context);

    this.props = props;
    listData = this.props.listData;
  }
 
  render() {  
    return (
      <div className="mdl-cell mdl-cell--4-col">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <h4>Current Invoices</h4>
          </div>
          <div className="mdl-cell mdl-cell--6-col">
            <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">New Invoice</a>
          </div>
        </div>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp list-min-width">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Invoice</th>
              <th className="mdl-data-table__cell--non-numeric">Customer</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {listData.map(function(invoice,idx) {
            return (
              <tr key={idx} onClick={this.props.onListRowSelect.bind(this, invoice)}>
                <td className="mdl-data-table__cell--non-numeric">{invoice.InvoiceNumber}</td>
                <td className="mdl-data-table__cell--non-numeric">{invoice.Customer.CustomerName}</td>
                <td className="mdl-data-table__cell__non-numeric">${invoice.Amount}</td>
              </tr>
            );
          }, this)}
          </tbody>
        </table>
      </div>
    );
  } 
  
}