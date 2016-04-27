"use strict";

import React              from "react";
import BaseComponent      from "../base_component";
import DatePicker         from 'material-ui/lib/date-picker/date-picker';
import CustomerList       from "./customer_list";
import CustomerView       from "./customer_view";
import stateInput         from "./customer_view";
require('../../../styles/styles.scss');

var customerListData, customerData;

export default class CustomerPane extends BaseComponent {

  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
    customerListData = [
      { "customer": "1", "companyName": "Red Bull Inc.", "contactName": "John Doe", "contactNumber": "8015555734", "addressInput": "500 S 250 E", "city": "Logan", "state": "UT | Utah", "zip": "84321"},
      { "customer": "2", "companyName": "Huntsman Hunting", "contactName": "Dallin Ficher", "contactNumber": "4356787777", "addressInput": "1000 N 550 E", "city": "Logan", "state": "UT | Utah", "zip": "84321"},
    ];

  }

  onCustomerChange = (event) => {
    event.preventDefault();

    var customerForm = event.target;

    customerListData.push({
      "customer": 12,
      "companyName": customerForm.companyNameInput.value,
      "contactName": customerForm.contactNameInput.value,
      "contactNumber": customerForm.contactNumberInput.value,
      "addressInput": customerForm.addressInput.value,
      "city": customerForm.cityInput.value,
      "state": stateInput,
      "zip": customerForm.zipInput.value
    });
    this.setState({"customerListData": customerListData,"customerData": customerData});
    //console.log(stateInput);
    //console.log(customerListData)
  };

  onListRowSelect = (customer, event) => {
    customerData = customer;
    //this.setState(...{"customerListData": customerListData,"customerData": customer},this.sendToFirebase});
  };

  render(){
    return (
      <div className="mdl-grid">
        <CustomerList listData={customerListData} onListRowSelect={this.onListRowSelect} />
        <CustomerView onFabClick={this.onCustomerChange}></CustomerView>
      </div>
    );
  }
}
