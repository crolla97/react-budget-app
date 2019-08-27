import React, { Component } from 'react'
import { connect } from 'react-redux';
import { startDeleteItem } from '../../store/actions/itemActions';
import moment from 'moment'

class ItemSummary extends Component {
  startDeleteItem = () => {
    this.props.startDeleteItem({ id: this.props.item.id});
  }
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="card item-summary red lighten-4">
          <div className="card-container">
            <div>
              <div className="card-title">{item.title}</div>
              <p className="card-date grey-text darken-4">{moment.unix(item.createdAt).format("Do MMM YYYY")}</p>
            </div>
            <div className="card-title">£{item.amount}</div>
            <button className="btn btn-floating blue delete-btn" onClick={this.startDeleteItem}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startDeleteItem: (item) => dispatch(startDeleteItem(item))
  }
}

export default connect(null, mapDispatchToProps)(ItemSummary);
