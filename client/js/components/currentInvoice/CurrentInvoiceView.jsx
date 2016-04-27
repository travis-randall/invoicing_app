// CurrentInvoiceView.jsx
//  Includes all components necessary for the 
"use strict";
import React from "react";
import BaseComponent from "../base_component";
import CurrentInvoiceList from "./CurrentInvoiceList";
import CurrentInvoicePane from "./CurrentInvoicePane";
import _ from "lodash";

var invoiceList, invoiceData;

export default class CurrentInvoiceView extends BaseComponent {
  
  constructor(props,context) {
    super(props, context);
    
    invoiceList = [
      { "InvoiceNumber": "123", "Customer": { "CustomerName": "ABC Customer"}, "Amount": 42.50, "Paid":false },
      { "InvoiceNumber": "987654321", "Customer": { "CustomerName": "XYZ Customer"}, "Amount": 666.66, "Paid": false },
      { "InvoiceNumber": "456", "Customer": { "CustomerName": "Nil Method"}, "Amount": 92.75, "Paid": false }
    ];
    
    // this.state = {"invoiceList": invoiceList, "invoiceData": invoiceData};
  }
  
  updateState = (obj,cb) => {
    this.setState(obj,cb);
  }

  sendToFirebase() {
    console.log("hi from sendToFirebase", arguments);
  }
  
  onInvoiceChange = (event) => {
    event.preventDefault();
    
    var formData = event.target;
    
    invoiceList.push({
      "InvoiceNumber": formData.InvoiceNumber.value || "",
      "InvoiceDate": formData.InvoiceDate.value || "",
      "Customer": { "CustomerName": formData.CustomerName.value || "" },
      "Amount": formData.Amount.value || "",
      "Notes": formData.Notes.value || "",
      "Paid": false
    });
    
    this.setState({"invoiceList": invoiceList}, this.sendToFirebase);
  }
  
  onListRowSelect = (invoice, event) => {
    console.log(invoice);
    invoiceData = invoice;
    this.setState({"invoiceList": invoiceList,"invoiceData": invoice},this.sendToFirebase);
  };

  render() {
    return (
      <div className="mdl-grid">
          <CurrentInvoiceList listData={invoiceList} onListRowSelect={this.onListRowSelect} />
          <CurrentInvoicePane detailData={invoiceData} onFABClick={this.onInvoiceChange} />
      </div>
    );
  }  
};
CurrentInvoiceView.state = {};