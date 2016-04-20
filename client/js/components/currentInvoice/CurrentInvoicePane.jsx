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
    return (
    <div className="mdl-cell mdl-cell--8-col">
      <h4>Invoice</h4>
      <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col">
          <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
            <p>Please select an invoice on the left.</p>
          </div>
        </div>
      </section>
    </div>
    );
  }
}