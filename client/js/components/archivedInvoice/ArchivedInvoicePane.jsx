"use strict";
import React from "react";
import BaseComponent from "../base_component";
import _ from "lodash";

var detailData;

export default class ArchivedInvoicePane extends BaseComponent {
  constructor(props,context) {
    super(props,context);
    this.props = props;
    this.state = {};
  }
  
  shouldComponentUpdate(nextProps,nextState) {
    //something has to happen here, IDK what yet
    return true;
  }
  
  render() {
    return (
    <div className="mdl-cell mdl-cell--8-col">
      <h4>Invoice</h4>
      <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col">
          <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="InvoiceNumber" 
                  name="InvoiceNumber" readOnly />
              <label className="mdl-textfield__label" htmlFor="InvoiceNumber">Invoice Number...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="InvoiceDate" 
                  name="InvoiceDate" readOnly />
              <label className="mdl-textfield__label" htmlFor="InvoiceDate">Invoice Date...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="CustomerName"
                  name="CustomerName" readOnly />
              <label className="mdl-textfield__label" htmlFor="CustomerName">Customer Name...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="Amount"
                  name="Amount" readOnly />
              <label className="mdl-textfield__label" htmlFor="Amount">Amount...</label>
            </div>
            <div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="Notes" 
                    name="Notes" readOnly />
                <label className="mdl-textfield__label" htmlFor="Notes">Notes...</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}