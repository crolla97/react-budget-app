import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from './Router';

class App extends Component {
  render() {
    const { auth } = this.props

    if (auth.isLoaded) return <Router />
    if (auth.isEmpty) return <p>Loading...</p>
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
