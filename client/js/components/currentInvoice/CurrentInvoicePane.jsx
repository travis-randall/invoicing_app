// CurrentInvoicePane.jsx
// Show the current invoice, or add a new invoice via the form on this pane
"use strict";
import React from "react";
import BaseComponent from "../base_component";


export default class CurrentInvoicePane extends BaseComponent {
  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
  }
  
  render() {
    var paidBtn = <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect pull-right">Set Paid</a>;
    var invoiceDetail = this.props.listData || {};
    return (
    <div className="mdl-cell mdl-cell--8-col">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <h4>Invoice</h4>
          {paidBtn}
         </div>
       </div>
      <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col">
          <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
            
          </div>
        </div>
      </section>
    </div>
    );
  }
}