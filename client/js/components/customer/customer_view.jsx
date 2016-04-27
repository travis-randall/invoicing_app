"use strict";

import React              from "react";
import BaseComponent      from "../base_component";
import DatePicker         from 'material-ui/lib/date-picker/date-picker';
import SelectField        from 'material-ui/lib/select-field';
import MenuItem           from 'material-ui/lib/menus/menu-item';
require('../../../styles/styles.scss');

var stateInput;

export default class CustomerView extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      "customer": 12,
      "companyName": "",
      "contactName": "",
      "contactNumber": "",
      "addressInput": "",
      "cityInput": "",
      "state": stateInput,
      "zipInput": "",
      "statePickerValue": 44
    };
  }

  //handleChanges = (event, index, value) => this.setState({value});

  handleNameChange = (event) => this.setState({companyName: event.target.value})
  handleContactChange = (event) => this.setState({contactName: event.target.value})
  handleNumberChange = (event) => this.setState({contactNumber: event.target.value})
  handleAddressChange = (event) => this.setState({addressInput: event.target.value})
  handleCityChange = (event) => this.setState({cityInput: event.target.value})
  handleZipChange = (event) => this.setState({zipInput: event.target.value})  

  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      "customer": 12,
      "companyName": "",
      "contactName": "",
      "contactNumber": "",
      "addressInput": "",
      "cityInput": "",
      "state": stateInput,
      "zipInput": "",
      "statePickerValue": 44
    });
    if(typeof this.props.onFabClick === 'function') {
      this.props.onFabClick(event);
    }
  }

 handleChange(e) {
    //debugger;
    //this.setState({value});
    stateInput = (e.target.innerText);
  }

  render(){
    return(
      <div className="mdl-cell mdl-cell--8-col">
        <h4>Invoice</h4>
        <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <form name="customerForm" onSubmit={this.submitForm}>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="companyName" name="companyNameInput" 
                    value={this.state.companyName} onChange={this.handleNameChange}/>
                  <label className="mdl-textfield__label" htmlFor="companyName" >Company Name...</label>
                </div> &nbsp; &nbsp;
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="contactName" name="contactNameInput" 
                    value={this.state.contactName} onChange={this.handleContactChange}/>
                  <label className="mdl-textfield__label" htmlFor="contactName">Contact Name...</label>
                </div> &nbsp; &nbsp;
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" name="contactNumberInput">
                  <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="contactNumber" name="contactNumberInput" 
                    value={this.state.contactNumber} onChange={this.handleNumberChange} />
                  <label className="mdl-textfield__label" htmlFor="contactNumber">Contact Number...</label>
                  <span className="mdl-textfield__error">Input is not a number!</span>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="address" name="addressInput" 
                    value={this.state.addressInput} onChange={this.handleAddressChange} />
                  <label className="mdl-textfield__label" htmlFor="address">Address...</label>
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="city" name="cityInput" 
                      value={this.state.cityInput} onChange={this.handleCityChange} />
                    <label className="mdl-textfield__label" htmlFor="city">City...</label>
                  </div>
                </div>
                <div>
                  <div>
                    <SelectField value={this.state.statePickerValue} onChange={(e) => this.handleChange(e)}>
                      <MenuItem value={1} primaryText="AL | Alabama"/>
                      <MenuItem value={2} primaryText="AK | Alaska"/>
                      <MenuItem value={3} primaryText="AZ | Arizona"/>
                      <MenuItem value={4} primaryText="AR | Arkansas"/>
                      <MenuItem value={5} primaryText="CA | California"/>
                      <MenuItem value={6} primaryText="CO | Colorado"/>
                      <MenuItem value={7} primaryText="CT | Connecticut"/>
                      <MenuItem value={8} primaryText="DE | Deleware"/>
                      <MenuItem value={9} primaryText="FL | Florida"/>
                      <MenuItem value={10} primaryText="GA | Georgia"/>
                      <MenuItem value={11} primaryText="HI | Hawaii"/>
                      <MenuItem value={12} primaryText="ID | Idaho"/>
                      <MenuItem value={13} primaryText="IL | Illinois"/>
                      <MenuItem value={14} primaryText="IN | Indiana"/>
                      <MenuItem value={15} primaryText="IA | Iowa"/>
                      <MenuItem value={16} primaryText="KS | Kansas"/>
                      <MenuItem value={17} primaryText="KY | Kentucky"/>
                      <MenuItem value={18} primaryText="LA | Louisiana"/>
                      <MenuItem value={19} primaryText="ME | Maine"/>
                      <MenuItem value={20} primaryText="MD | Maryland"/>
                      <MenuItem value={21} primaryText="MA | Massachusetts"/>
                      <MenuItem value={22} primaryText="MI | Michigan"/>
                      <MenuItem value={23} primaryText="MN | Minnesota"/>
                      <MenuItem value={24} primaryText="MS | Mississippi"/>
                      <MenuItem value={25} primaryText="MO | Missouri"/>
                      <MenuItem value={26} primaryText="MT | Montana"/>
                      <MenuItem value={27} primaryText="NE | Nebraska"/>
                      <MenuItem value={28} primaryText="NE | Nevada"/>
                      <MenuItem value={29} primaryText="NH | New Hampshire"/>
                      <MenuItem value={30} primaryText="NJ | New Jersey"/>
                      <MenuItem value={31} primaryText="NM | New Mexico"/>
                      <MenuItem value={32} primaryText="NY | New York"/>
                      <MenuItem value={33} primaryText="NC | North Carolina"/>
                      <MenuItem value={34} primaryText="ND | North Dakota"/>
                      <MenuItem value={35} primaryText="OH | Ohio"/>
                      <MenuItem value={36} primaryText="OK | Oklahoma"/>
                      <MenuItem value={37} primaryText="OR | Oregon"/>
                      <MenuItem value={38} primaryText="PA | Pennsylvania"/>
                      <MenuItem value={39} primaryText="RI | Rhode Island"/>
                      <MenuItem value={40} primaryText="SC | South Carolina"/>
                      <MenuItem value={41} primaryText="SD | South Dakota"/>
                      <MenuItem value={42} primaryText="TN | Tennessee"/>
                      <MenuItem value={43} primaryText="TX | Texas"/>
                      <MenuItem value={44} primaryText="UT | Utah"/>
                      <MenuItem value={45} primaryText="VT | Vermont"/>
                      <MenuItem value={46} primaryText="VA | Virginia"/>
                      <MenuItem value={47} primaryText="WA | Washington"/>
                      <MenuItem value={48} primaryText="WV | West Virgina"/>
                      <MenuItem value={49} primaryText="WI | Wisconsin"/>
                      <MenuItem value={50} primaryText="WY | Wyoming"/>
                      <MenuItem value={51} primaryText="Other"/>
                    </SelectField>
                  </div>
                </div>
                <div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="zipcode" name="zipInput" 
                      value={this.state.zipInput} onChange={this.handleZipChange}/>
                    <label className="mdl-textfield__label" htmlFor="zipcode">Zipcode...</label>
                  </div>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" style={{float: "right"}} type="submit">
                      <i className="material-icons">add</i>
                    </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        </div>
    );
  }
}
