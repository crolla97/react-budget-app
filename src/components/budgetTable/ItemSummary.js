import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteItem } from '../../store/actions/itemActions';

class ItemSummary extends Component {
  deleteItem = (e) => {
    e.preventDefault();

    this.props.deleteItem(this.props.item.id)
  }
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="card item-summary red lighten-4">
          <div className="card-container">
            <div>
              <div className="card-title">{item.title}</div>
              <p className="card-date grey-text darken-4">{moment(item.createdAt.toDate()).calendar(null, {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'dddd',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'DD/MM/YYYY'
            })}</p>
            </div>
            <div className="card-title">£{item.amount}</div>
            <button className="btn btn-floating blue delete-btn" onClick={this.deleteItem}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(deleteItem(item))
  }
}

export default connect(null, mapDispatchToProps)(ItemSummary);
