import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddItem } from '../../store/actions/itemActions';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Redirect } from 'react-router-dom';

class CreateItemPage extends Component {
  state = {
    title: '',
    amount: 0,
    type: '',
    createdAt: moment(),
    calendarFocused: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();    
    // console.log(this.state);
    this.props.createItem(this.state)
    console.log(this.state);
  }
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }))
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  render() {

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Item</h5>
            <div className="row">
              <div className="input-field col s12 m6">
                <label htmlFor="title">Expense Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
              </div>
              <div className="input-field col s12 m6">
                <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                  displayFormat="DD/MM/YYYY"
                />
              </div>
            </div>
            <div className="row">
              <select className="browser-default col s12 m6" id="type" defaultValue="none" onChange={this.handleChange}>
                <option value="none" disabled hidden>Choose your option</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <div className="input-field col s12 m6">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" onChange={this.handleChange}/>
              </div>
              
            </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create Item</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => dispatch(startAddItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CreateItemPage);