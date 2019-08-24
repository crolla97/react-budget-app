import React, { Component } from 'react';
import SidePanel from './SidePanel';
import ItemList from '../budgetTable/ItemList';
import Filter from './Filter';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  render() {
    // console.log(this.props);
    const { items, auth } = this.props;
    // if (!auth.uid) return <Redirect to='/signin' />

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
    items: state.item,
  }
}

export default connect(mapStateToProps)(DashboardPage);
