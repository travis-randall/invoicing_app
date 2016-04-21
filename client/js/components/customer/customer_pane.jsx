"use strict";

import React              from "react";
import BaseComponent      from "../base_component";
import DatePicker         from 'material-ui/lib/date-picker/date-picker';
import CustomerList       from "./customer_list";
import CustomerView       from "./customer_view";
require('../../../styles/styles.scss');

export default class CustomerPane extends BaseComponent {

  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
  }

  render(){
    return (
      <div className="mdl-grid">
        <CustomerList></CustomerList>
        <CustomerView></CustomerView>
      </div>
    );
  }
}
