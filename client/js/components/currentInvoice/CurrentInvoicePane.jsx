// CurrentInvoicePane.jsx
// Show the current invoice, or add a new invoice via the form on this pane
"use strict";
import React from "react";
import BaseComponent from "../base_component";
import _ from "lodash";

var detailData;

export default class CurrentInvoicePane extends BaseComponent {
  // getInitialState() {
  //   return { };
  // }
  constructor(props,context) {
    super(props, context);

    // this.state = this.getInitialState();
    this.state = {
        InvoiceNumber:"",
        InvoiceDate:"",
        CustomerName:"",
        Amount:"",
        Notes:""
    };
    
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   // super.componentShouldUpdate();
  //   console.log("hi from pane shouldComponentUpdate",arguments);
  //   if(_.some(nextProps, "InvoiceNumber")) {
  //     detailData = nextProps;
  //     this.setState({"invoiceData": nextProps});
  //     return true;
  //   }
  //   // return _.some(nextProps, "InvoiceNumber");
  //   return false;
  // }
  
  handleInvoiceChange = (event) => {
    // console.log(arguments);
    console.log(event.target.name);
    
    // var obj = {};
    // obj[event.target.name] = event.target.value;
    
    this.setState({InvoiceNumber: event.target.value});
  }
  handleDateChange = (event) => {
    // console.log(arguments);
    console.log(event.target.name);
    
    // var obj = {};
    // obj[event.target.name] = event.target.value;
    
    this.setState({InvoiceDate: event.target.value});
  }
  handleNameChange = (event) => {
    // console.log(arguments);
    console.log(event.target.name);
    
    // var obj = {};
    // obj[event.target.name] = event.target.value;
    
    this.setState({CustomerName: event.target.value});
  }
  handleAmountChange = (event) => {
    // console.log(arguments);
    console.log(event.target.name);
    
    // var obj = {};
    // obj[event.target.name] = event.target.value;
    
    this.setState({Amount: event.target.value});
  }
  handleNoteChange = (event) => {
    // console.log(arguments);
    console.log(event.target.name);
    
    // var obj = {};
    // obj[event.target.name] = event.target.value;
    
    this.setState({Notes: event.target.value});
  }
  
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
        InvoiceNumber:"",
        InvoiceDate:"",
        CustomerName:"",
        Amount:"",
        Notes:""
    });
    if (typeof this.props.onFABClick === 'function') {
      this.props.onFABClick(event);
    }
  }
  
  clearForm(event) {
    this.setState({
        InvoiceNumber:"",
        InvoiceDate:"",
        CustomerName:"",
        Amount:"",
        Notes:""
    });
  }
  
  render() {
    return (
    <div className="mdl-cell mdl-cell--8-col">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <h4>Invoice</h4>
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style={{"marginTop":"16px"}} onClick={this.clearForm}>Set Paid</a>
        </div>
      </div>
      <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col">
          <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
            <form name="invoiceFrm" onSubmit={this.submitForm}>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="InvoiceNumber" 
                      name="InvoiceNumber" value={this.state.InvoiceNumber} onChange={this.handleInvoiceChange} />
                  <label className="mdl-textfield__label" htmlFor="InvoiceNumber">Invoice Number...</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="InvoiceDate" 
                      name="InvoiceDate" value={this.state.InvoiceDate} onChange={this.handleDateChange} />
                  <label className="mdl-textfield__label" htmlFor="InvoiceDate">Invoice Date...</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="CustomerName"
                      name="CustomerName" value={this.state.CustomerName} onChange={this.handleNameChange}/>
                  <label className="mdl-textfield__label" htmlFor="CustomerName">Customer Name...</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="Amount"
                      name="Amount" value={this.state.Amount} onChange={this.handleAmountChange}/>
                  <label className="mdl-textfield__label" htmlFor="Amount">Amount...</label>
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="Notes" 
                       name="Notes" value={this.state.Notes} onChange={this.handleNoteChange}/>
                    <label className="mdl-textfield__label" htmlFor="Notes">Notes...</label>
                  </div>
                </div>
                <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" 
                    style={{float: "right"}}>
                  <i className="material-icons">add</i>
                </button>
              </form>
          </div>
        </div>
      </section>
    </div>
    );
  }
};
