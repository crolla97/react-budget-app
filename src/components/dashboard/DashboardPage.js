import React, { Component } from 'react';
import SidePanel from './SidePanel';
import ItemList from '../budgetTable/ItemList';
import Filter from './Filter';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


class DashboardPage extends Component {
  render() {
    const { items, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <Filter />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m7">
            { auth.isLoaded && <ItemList items={items} />}
            { auth.isEmpty && <p>Loading...</p> }
          </div>
          <div className="col s12 m5">
            <SidePanel />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.firestore.ordered.fetchItems,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [{
    collection: `users/${props.auth.uid}/items`,
    storeAs: 'fetchItems'
  }])
  )(DashboardPage);
