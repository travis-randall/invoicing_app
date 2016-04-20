"use strict";
import React from "react";
import BaseComponent from "../base_component";
import ArchivedInvoiceList from "./ArchivedInvoiceList";
import ArchivedInvoicePane from "./ArchivedInvoicePane";

export default class ArchivedInvoiceView extends BaseComponent {
  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
  }

  render() {
    return (
      <div className="mdl-grid">
          <ArchivedInvoiceList />
          <ArchivedInvoicePane />
      </div>
    );
  }  
}