"use strict";

import React              from "react";
import BaseComponent      from "./base_component";
import MySimpleDialog     from "./simpleDialog/SimpleDialog";
import CurrentInvoiceView from "./currentInvoice/CurrentInvoiceView";
import ArchivedInvoiceView from "./archivedInvoice/ArchivedInvoiceView";
import CustomerPane       from "./customer/customer_pane";
require('../../styles/styles.scss');

export default class Index extends BaseComponent {

  constructor(props, context) {
    super(props, context);
    this.state = this.getState();
  }

  getState() {
    return {
      showAddButton: true
    };
  }

  componentDidUpdate() {
    // This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
    componentHandler.upgradeDom();
  }

   // Toggle the Add Button
  toggleAddButton(e, bool) {
    this.setState({showAddButton: bool});
  }

  render(){

    var addButton;

    if (this.state.showAddButton) {
      addButton = <div><MySimpleDialog></MySimpleDialog></div>;
    } else {
      addButton = <div></div>;
    }

    return (<div>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
         <div className="mdl-layout--large-screen-only mdl-layout__header-row">
         </div>
         <div className="mdl-layout--large-screen-only mdl-layout__header-row">
           <h3>MORTYZ &nbsp;</h3>
           <h5>Invoicing System</h5>
         </div>
         <div className="mdl-layout--large-screen-only mdl-layout__header-row">
         </div>
         <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
           <a href="#customers" className="mdl-layout__tab  is-active" onClick={ (e) => {this.toggleAddButton(e, true);}}>Customers</a>
           <a href="#current-invoices" className="mdl-layout__tab" onClick={(e) => {this.toggleAddButton(e, true);}}>Current Invoices</a>
           <a href="#archived-invoices" className="mdl-layout__tab" onClick={ (e) => {this.toggleAddButton(e, false);}}>Archived Invoices</a>
         </div>
        </header>
        <main className="mdl-layout__content">
          <div className="mdl-layout__tab-panel is-active" id="customers">
            <CustomerPane />
          </div>
          <div className="mdl-layout__tab-panel" id="current-invoices">
            <CurrentInvoiceView />
          </div>
          <div className="mdl-layout__tab-panel" id="archived-invoices">
            <ArchivedInvoiceView />
          </div>
         <footer className="mdl-mega-footer">
           <div className="mdl-mega-footer--middle-section">
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" />
               <h1 className="mdl-mega-footer--heading">Features</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">About</a></li>
               </ul>
             </div>
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" />
               <h1 className="mdl-mega-footer--heading">Technology</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">How it works</a></li>
               </ul>
             </div>
           </div>
           <div className="mdl-mega-footer--bottom-section">
             <div className="mdl-logo">
               Built by <a href="http://33.media.tumblr.com/tumblr_m9ql4cbGFo1qd2g3i.gif">Dev Pixel</a>.
             </div>
           </div>
         </footer>
       </main>
    </div>
    </div>);
  }

}
