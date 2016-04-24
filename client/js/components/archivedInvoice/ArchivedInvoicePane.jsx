"use strict";
import React from "react";
import BaseComponent from "../base_component";

export default class ArchivedInvoicePane extends BaseComponent {
  constructor(props,context) {
    super(props,context);
  }
  render() {
    return (
      <div className="mdl-cell mdl-cell--8-col">
        <h4>Invoice</h4>
        <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          {this.props.children}
        </section>
      </div>
    );
  }
}