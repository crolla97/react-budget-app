import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../store/actions/itemActions';
import { Redirect } from 'react-router-dom';

class CreateItemPage extends Component {
  state = {
    title: '',
    amount: '',
    type: ''
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
    this.props.history.push('/')
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Item</h5>
          <div className="input-field">
            <label htmlFor="title">Expense Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={this.handleChange}/>
          </div>
          <select className="browser-default" id="type" defaultValue="none" onChange={this.handleChange}>
            <option value="none" disabled hidden>Choose your option</option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <div className="div input-field">
            <button className="btn pink lighten-1 z-depth-0">Create Item</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => dispatch(createItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemPage);