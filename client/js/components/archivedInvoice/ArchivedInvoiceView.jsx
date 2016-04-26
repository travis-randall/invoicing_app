"use strict";
import React from "react";
import BaseComponent from "../base_component";
import ArchivedInvoiceList from "./ArchivedInvoiceList";
import ArchivedInvoicePane from "./ArchivedInvoicePane";
import InvoiceForm from "../invoiceForm/InvoiceForm";

export default class ArchivedInvoiceView extends BaseComponent {
  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
  }

  render() {
    var invoiceListData = [
      { "invoiceNumber": "123", "Company": { "companyName": "ABC Company"}, "amount": 65.99, "paid": true },
      { "invoiceNumber": "987654321", "Company": { "companyName": "XYZ Company"}, "amount": 123.45, "paid": true},
      { "invoiceNumber": "456", "Company": { "companyName": "Nil Method"}, "amount": 90, "paid": true }
    ];
    return (
      <div className="mdl-grid">
          <ArchivedInvoiceList listData={invoiceListData}/>
          <ArchivedInvoicePane>
            Something
          </ArchivedInvoicePane>
      </div>
    );
  }  
}