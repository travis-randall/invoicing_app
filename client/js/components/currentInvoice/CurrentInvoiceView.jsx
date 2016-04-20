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
    return (
      <div className="mdl-grid">
          <CurrentInvoiceList />
          <CurrentInvoicePane />
      </div>
    );
  }  
}
