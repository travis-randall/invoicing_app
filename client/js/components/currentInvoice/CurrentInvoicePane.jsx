// CurrentInvoicePane.jsx
// Show the current invoice, or add a new invoice via the form on this pane
"use strict";
import React from "react";
import BaseComponent from "../base_component";


export default class CurrentInvoicePane extends BaseComponent {
  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
    this.props = props;
  }
  getState() {
    return {
      
    };
  }
  handleChanged(event) {
    console.log(event);
    // this.setState({event.target: event.target.value});
  }
  // invoice form elements
  // InvoiceNumber, InvoiceDate, Customer, Array of LineItem Objects, Notes, Amount
  
  render() {
    var paidBtn = <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Set Paid</a>;
    var invoiceDetail = this.props.listData || {};
    return (
    <div className="mdl-cell mdl-cell--8-col">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <h4>Invoice</h4>
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          {paidBtn}
        </div>
      </div>
      <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col">
          <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
            <form name="invoiceFrm">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="InvoiceNumber" 
                      name="InvoiceNumber" />
                  <label className="mdl-textfield__label" htmlFor="InvoiceNumber">Invoice Number...</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="InvoiceDate" 
                      name="InvoiceDate" />
                  <label className="mdl-textfield__label" htmlFor="InvoiceDate">Invoice Date...</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="Customer Name"
                      name="CustomerName"  />
                  <label className="mdl-textfield__label" htmlFor="Customer Name">Customer Name...</label>
                </div>
                <div>
                
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Notes" 
                       name="Notes" />
                    <label className="mdl-textfield__label" htmlFor="Notes">Notes...</label>
                  </div>
                </div>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" style={{float: "right"}} onClick={this.props.onFABClick}>
                  <i className="material-icons">add</i>
                </button>
              </form>
          </div>
        </div>
      </section>
    </div>
    );
  }
}