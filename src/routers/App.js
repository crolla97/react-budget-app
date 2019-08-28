import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from '../components/layouts/Navbar';
import DashboardPage from '../components/dashboard/DashboardPage';
import CreateItemPage from '../components/budgetTable/CreateItemPage';
import SignInPage from '../components/auth/SignInPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact={true} path='/' component={SignInPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage} />
            <PrivateRoute path='/create' component={CreateItemPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
