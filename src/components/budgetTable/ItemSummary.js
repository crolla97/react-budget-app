import React from 'react'

const ItemSummary = ({item}) => {
  return (
    <div>
      <div className="card item-summary red lighten-4">
        <div className="card-container">
          <div>
            <div className="card-title">{item.title}</div>
            <p className="card-date grey-text darken-4">17th August, 1pm</p>
          </div>
          <div className="card-title">£{item.amount}</div>
          <button className="btn btn-floating blue delete-btn">X</button>
        </div>
      </div>
    </div>
  )
}

export default ItemSummary;
