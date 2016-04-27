"use strict";
import React from "react";
import BaseComponent from "../base_component";
import ArchivedInvoiceList from "./ArchivedInvoiceList";
import ArchivedInvoicePane from "./ArchivedInvoicePane";

var invoiceList, invoiceData;

export default class ArchivedInvoiceView extends BaseComponent {
  constructor(props,context) {
    super(props, context);

    invoiceList = [
      { "InvoiceNumber": "123", "Customer": { "CustomerName": "ABC Customer"}, "Amount": 65.99, "Paid": true },
      { "InvoiceNumber": "987654321", "Customer": { "CustomerName": "XYZ Customer"}, "Amount": 123.45, "Paid": true},
      { "InvoiceNumber": "456", "Customer": { "CustomerName": "Nil Method"}, "Amount": 90, "Paid": true }
    ];
    
    this.state = {"invoiceList": invoiceList};
  }
  
  sendToFirebase() {
    console.log("hi from Archived sendToFirebase");
  }
  
  onInvoiceChange = (event) => {
    event.preventDefault();
    
    // this function won't be called, since you can't edit archived invoices
  }
  
  onListRowSelect = (invoice, event) => {
    console.log("archived invoice",invoice);
    invoiceData = invoice;
    this.setState({invoiceData});
  };

  render() {
    return (
      <div className="mdl-grid">
          <ArchivedInvoiceList listData={invoiceList} onListRowSelect={this.onListRowSelect} />
          <ArchivedInvoicePane detailData={this.state.invoiceData} />
      </div>
    );
  }  
}