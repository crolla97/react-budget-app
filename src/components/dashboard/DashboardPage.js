import React, { Component } from 'react';
import SidePanel from './SidePanel';
import ItemList from '../budgetTable/ItemList';
import Filter from './Filter';
import { connect } from 'react-redux';
import visibleItems from '../../store/selectors/visibleItems';

class DashboardPage extends Component {
  render() {
    const { items, auth } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <Filter />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m7">
            <ItemList items={items} />
          </div>
          <div className="col s12 m4 offset-m1">
            <SidePanel />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: visibleItems(state.item, state.filters)
  }
}

export default connect(mapStateToProps)(DashboardPage);
