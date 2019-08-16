import React, { Component } from 'react';
import SidePanel from './SidePanel';
import ItemList from '../budgetTable/ItemList';

class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ItemList />
          </div>
          <div className="col s12 m5 offset-m1">
            <SidePanel />
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage;
