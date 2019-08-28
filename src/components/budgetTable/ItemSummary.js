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
    const itemColour = {
      expense: "card item-summary red lighten-4",
      income: "card item-summary green lighten-4"
    }
    return (
      <div>
        <div className={itemColour[item.type]}>
          <div className="card-container">
            <div>
              <h6>{item.title}</h6>
              <p className="card-date grey-text darken-4">{moment.unix(item.createdAt).format("Do MMM YYYY")}</p>
            </div>
            <h6>£{item.amount}</h6>
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
