// CurrentInvoiceList.jsx
//   Provide the list of current invoices
"use strict";
import React from "react";
import BaseComponent from "../base_component";


export default class CurrentInvoiceList extends BaseComponent {
  constructor(props,context) {
    super(props,context);
    // this.state = this.getState();
  }
 
  render() {
    var listData = this.props.listData;
    
    return (
      <div className="mdl-cell mdl-cell--4-col">
        <h4>Current Invoices</h4>
        <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Invoice</th>
              <th className="mdl-data-table__cell--non-numeric">Company</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {listData.map(function(invoice,i) {
            return (
              <tr>
                <td className="mdl-data-table__cell--non-numeric">{invoice.invoiceNumber}</td>
                <td className="mdl-data-table__cell--non-numeric">{invoice.Company.companyName}</td>
                <td className="mdl-data-table__cell__non-numeric">${invoice.amount}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  } 
  
}