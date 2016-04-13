"use strict";

import React              from "react";
import BaseComponent      from "./base_component";
import DialogAddCustomer  from "./dialogbox";
import MySimpleDialog     from "./simpleDialog/SimpleDialog";
import DatePicker         from 'material-ui/lib/date-picker/date-picker';
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
     addButton = <div><MySimpleDialog><DatePicker hintText="Due Date"/></MySimpleDialog></div>
   } else {
     addButton = <div></div>
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
           <a href="#current-invoices" className="mdl-layout__tab is-active" onClick={(e) => {this.toggleAddButton(e, true);}}>Current Invoices</a>
           <a href="#archived-invoices" className="mdl-layout__tab" onClick={ (e) => {this.toggleAddButton(e, false);}}>Archived Invoices</a>
           <a href="#customers" className="mdl-layout__tab" onClick={ (e) => {this.toggleAddButton(e, true);}}>Customers</a>
          {addButton}
         </div>
        </header>
        <main className="mdl-layout__content">
         <div className="mdl-layout__tab-panel is-active" id="current-invoices">
         <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
             <h4>Current Invoices</h4>
             <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
              <thead>
                <tr>
                  <th className="mdl-data-table__cell--non-numeric">Invoice</th>
                  <th className="mdl-data-table__cell--non-numeric">Company</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">ACME-Corp-00051113</td>
                  <td className="mdl-data-table__cell--non-numeric">ACME Corporation</td>
                  <td>$2,000.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-002</td>
                  <td className="mdl-data-table__cell--non-numeric">Red Bull Inc.</td>
                  <td>$300.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-003</td>
                  <td className="mdl-data-table__cell--non-numeric">Minning Inc.</td>
                  <td>$5,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
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
         </div>
         </div>
         <div className="mdl-layout__tab-panel" id="archived-invoices">
         <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
             <h4>Archived Invoices</h4>
             <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
              <thead>
                <tr>
                  <th className="mdl-data-table__cell--non-numeric">Invoice</th>
                  <th className="mdl-data-table__cell--non-numeric">Company</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">ACME-Corp-00051113</td>
                  <td className="mdl-data-table__cell--non-numeric">ACME Corporation</td>
                  <td>$2,000.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-002</td>
                  <td className="mdl-data-table__cell--non-numeric">Red Bull Inc.</td>
                  <td>$300.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-003</td>
                  <td className="mdl-data-table__cell--non-numeric">Minning Inc.</td>
                  <td>$5,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
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
         </div>
         </div>
         <div className="mdl-layout__tab-panel" id="customers">
         <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <h4>Customers</h4>
            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
              <thead>
                <tr>
                  <th className="mdl-data-table__cell--non-numeric">Invoice</th>
                  <th className="mdl-data-table__cell--non-numeric">Company</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">ACME-Corp-00051113</td>
                  <td className="mdl-data-table__cell--non-numeric">ACME Corporation</td>
                  <td>$2,000.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-002</td>
                  <td className="mdl-data-table__cell--non-numeric">Red Bull Inc.</td>
                  <td>$300.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-003</td>
                  <td className="mdl-data-table__cell--non-numeric">Minning Inc.</td>
                  <td>$5,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
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
         </div>
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
               <h1 className="mdl-mega-footer--heading">Details</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">Spec</a></li>
               </ul>
             </div>
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" />
               <h1 className="mdl-mega-footer--heading">Technology</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">How it works</a></li>
               </ul>
             </div>
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" />
               <h1 className="mdl-mega-footer--heading">FAQ</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">Questions</a></li>
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
