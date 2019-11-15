import React from 'react';
import ItemSummary from './ItemSummary';

const ItemList = ({ items }) => {
  return (
    <div className="project-list section">
      { 
        items.length === 0 ? (
          <div>
            <span>No Items</span>
          </div>
        ) : (
          items && items.map(item => {
            return <ItemSummary item={item} key={item.id} />
          })
        )
      }
    </div>
  )
}

export default ItemList;