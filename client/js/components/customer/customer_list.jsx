"use strict";

import React              from "react";
import BaseComponent      from "../base_component";
require('../../../styles/styles.scss');

export default class CustomerList extends BaseComponent {

  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
  }

  render(){
    return(
      <div className="mdl-cell mdl-cell--4-col">
        <h4>Customers</h4>
        <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Invoice</th>
              <th className="mdl-data-table__cell--non-numeric">Company</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">ACME-Corp-00051113</td>
              <td className="mdl-data-table__cell--non-numeric">ACME Corporation</td>
              <td>$2,000.00</td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">INV-002</td>
              <td className="mdl-data-table__cell--non-numeric">Red Bull Inc.</td>
              <td>$300.00</td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">INV-003</td>
              <td className="mdl-data-table__cell--non-numeric">Minning Inc.</td>
              <td>$5,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
