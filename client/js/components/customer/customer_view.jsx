"use strict";

import React              from "react";
import BaseComponent      from "../base_component";
import DatePicker         from 'material-ui/lib/date-picker/date-picker';
require('../../../styles/styles.scss');

export default class CustomerView extends BaseComponent {

  constructor(props,context) {
    super(props, context);
    // this.state = this.getState();
  }

  render(){
    return(
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
