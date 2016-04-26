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
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-card__supporting-text mdl-grid mdl-grid--nospacing">
              <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="companyName" />
                  <label className="mdl-textfield__label" htmlFor="companyName">Company Name...</label>
                </div> &nbsp; &nbsp;
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="contactName" />
                  <label className="mdl-textfield__label" htmlFor="contactName">Contact Name...</label>
                </div> &nbsp; &nbsp;
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="contactNumber" />
                  <label className="mdl-textfield__label" htmlFor="contactNumber">Contact Number...</label>
                  <span className="mdl-textfield__error">Input is not a number!</span>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="address" />
                  <label className="mdl-textfield__label" htmlFor="address">Address...</label>
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="city" />
                    <label className="mdl-textfield__label" htmlFor="city">City...</label>
                  </div>
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="state" />
                    <label className="mdl-textfield__label" htmlFor="state">State...</label>
                  </div>
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="zipcode" />
                    <label className="mdl-textfield__label" htmlFor="zipcode">Zipcode...</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}