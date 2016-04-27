"use strict";
import React from "react";
import BaseComponent from "../base_component";

var listData;

export default class ArchivedInvoiceList extends BaseComponent {
  constructor(props, context) {
    super(props,context);
    
    this.props = props;
    listData = this.props.listData;
  }
  
  render() {    
    return (
      <div className="mdl-cell mdl-cell--4-col">
        <h4>Archived Invoices</h4>
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
                <tr key={idx} >
                  <td className="mdl-data-table__cell--non-numeric">{invoice.InvoiceNumber}</td>
                  <td className="mdl-data-table__cell--non-numeric">{invoice.Customer.CustomerName}</td>
                  <td className="mdl-data-table__cell--non-numeric">${invoice.Amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}