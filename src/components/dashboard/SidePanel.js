import React from 'react'
import { connect } from 'react-redux';
import visibleItems from '../../store/selectors/visibleItems';
import { expensesTotal, incomeTotal } from '../../store/selectors/itemTotals';

const SidePanel = (props) => {
  const { getIncomeTotal, getExpensesTotal } = props
  return (
    <div className="side-panel section">
      <div className="card item-summary">
        <div className="card-content grey-text darken-3">
          <div className="row">
            <span className="card-title">Side Panel</span>
          </div>
          <div className="row">
            <span>Incomes</span>
            <p>{getIncomeTotal}</p>
          </div>
          <div className="row">
            <span>Expenses</span>
            <p>{getExpensesTotal}</p>
          </div>
          <div className="row">
            <span>Total</span>
            <p>{getIncomeTotal - getExpensesTotal}</p>
          </div>

        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  const getVisibleItems = visibleItems(state.item, state.filters)

  return {
    itemCount: getVisibleItems,
    getExpensesTotal: expensesTotal(getVisibleItems),
    getIncomeTotal: incomeTotal(getVisibleItems)
  }
} 

export default connect(mapStateToProps)(SidePanel);