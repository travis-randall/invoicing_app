// CurrentInvoiceView.jsx
//  Includes all components necessary for the 
"use strict";
import React from "react";
import BaseComponent from "../base_component";
import CurrentInvoiceList from "./CurrentInvoiceList";
import CurrentInvoicePane from "./CurrentInvoicePane";
import _ from "lodash";

var invoiceListData, invoiceData;

export default class CurrentInvoiceView extends BaseComponent {  
  constructor(props,context) {
    super(props, context);
    super.componentDidMount();
    invoiceListData = [
      { "InvoiceNumber": "123", "Customer": { "CustomerName": "ABC Customer"}, "Amount": 42.50, "Paid":false },
      { "InvoiceNumber": "987654321", "Customer": { "CustomerName": "XYZ Customer"}, "Amount": 666.66, "Paid": false },
      { "InvoiceNumber": "456", "Customer": { "CustomerName": "Nil Method"}, "Amount": 92.75, "Paid": false }
    ];
    
    this.state = {"invoiceListData": invoiceListData, "invoiceData": {}};
  }
  // getState() { return {}; }
  sendToFirebase() {
    console.log("hi from sendToFirebase", arguments);
  }
  
  onInvoiceChange = (event) => {
    event.preventDefault();
    console.log("hello  from parent", arguments);
    
    let formData = event.target;

    console.log(formData.InvoiceNumber.value);
    invoiceListData.push({
      "InvoiceNumber": formData.InvoiceNumber.value || "",
      "InvoiceDate": formData.InvoiceDate.value || "",
      "Customer": { "CustomerName": formData.CustomerName.value || "" },
      "Amount": formData.Amount.value || "",
      "Notes": formData.Notes.value || "",
      "Paid": false
    });
    this.setState({"invoiceListData": invoiceListData, "invoiceData": {}}, this.sendToFirebase);
  };

  render() {
    return (
      <div className="mdl-grid">
          <CurrentInvoiceList listData={invoiceListData}/>
          <CurrentInvoicePane detailData={invoiceData} onFABClick={this.onInvoiceChange}/>
      </div>
    );
  }  
}
