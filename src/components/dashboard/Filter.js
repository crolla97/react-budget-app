import React, { Component } from 'react';
import { connect } from 'react-redux';
// import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../store/actions/filters.Actions';

class Filter extends Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }
  render() {
    return (
      <div>
        <div className="input-field col s12 m4">
          <input 
            type="text"
            placeholder="Search Items"
            defaultValue={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="col s12 m2">
          <label>Sort By Date/Amount</label>
          <select 
            className="browser-default"
            defaultValue={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId="filterStartDate"
            endDate={this.props.filters.endDate}
            endDateId="filterEndDate"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);