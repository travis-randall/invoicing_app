// CurrentInvoiceView.jsx
//  Includes all components necessary for the
"use strict";
import React from "react";
import BaseComponent from "../base_component";
import CurrentInvoiceList from "./CurrentInvoiceList";
import CurrentInvoicePane from "./CurrentInvoicePane";


export default class CurrentInvoiceView extends BaseComponent {
  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
  }

  render() {
    var invoiceListData = [
      { "invoiceNumber": "123", "Company": { "companyName": "ABC Company"}, "amount": 42.50 },
      { "invoiceNumber": "987654321", "Company": { "companyName": "XYZ Company"}, "amount": 666.66 },
      { "invoiceNumber": "456", "Company": { "companyName": "Nil Method"}, "amount": 92.75 }
    ];
    var invoiceData;
    return (
      <div className="mdl-grid bootstrap-class">
          <CurrentInvoiceList listData={invoiceListData} />
          <CurrentInvoicePane detailData={invoiceData}/>
      </div>
    );
  }
}
