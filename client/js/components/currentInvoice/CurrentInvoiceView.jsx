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
    
    this.invoiceListData = [
      { "invoiceNumber": "123", "Company": { "companyName": "ABC Company"}, "amount": 42.50, "paid":false },
      { "invoiceNumber": "987654321", "Company": { "companyName": "XYZ Company"}, "amount": 666.66, "paid": false },
      { "invoiceNumber": "456", "Company": { "companyName": "Nil Method"}, "amount": 92.75, "paid": false }
    ];
    this.invoiceData = {};
  }
  
  onInvoiceChange(event) {
    event.preventDefault();
    console.log("hello  from parent", arguments);
  }

  render() {
    return (
      <div className="mdl-grid">
          <CurrentInvoiceList listData={this.invoiceListData}/>
          <CurrentInvoicePane detailData={this.invoiceData} onFABClick={this.onInvoiceChange}/>
      </div>
    );
  }  
}
