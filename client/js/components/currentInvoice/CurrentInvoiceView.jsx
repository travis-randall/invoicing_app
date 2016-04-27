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

    invoiceListData = [
      { "InvoiceNumber": "123", "Customer": { "CustomerName": "ABC Customer"}, "Amount": 42.50, "Paid":false },
      { "InvoiceNumber": "987654321", "Customer": { "CustomerName": "XYZ Customer"}, "Amount": 666.66, "Paid": false },
      { "InvoiceNumber": "456", "Customer": { "CustomerName": "Nil Method"}, "Amount": 92.75, "Paid": false }
    ];
    
    this.state = {"invoiceListData": invoiceListData, "invoiceData": invoiceData};
  }

  sendToFirebase() {
    console.log("hi from sendToFirebase", arguments);
  }
  
  onInvoiceChange = (event) => {
    event.preventDefault();
    
    var formData = event.target;
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
  
  onListRowSelect = (invoice, event) => {
    console.log(invoice);
    invoiceData = invoice;
    this.setState({"invoiceListData": invoiceListData,"invoiceData": invoice},this.sendToFirebase);
  };

  render() {
    return (
      <div className="mdl-grid">
          <CurrentInvoiceList listData={this.state.invoiceListData} onListRowSelect={this.onListRowSelect} />
          <CurrentInvoicePane detailData={this.state.invoiceData} onFABClick={this.onInvoiceChange} />
      </div>
    );
  }  
}
