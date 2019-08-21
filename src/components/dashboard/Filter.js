import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { DateRangePicker } from 'react-dates';

class Filter extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m4">
          <input type="text"/>
        </div>
        <div className="col s12 m2">
          <label>Sort By Date/Amount</label>
          <select className="browser-default">
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filter;