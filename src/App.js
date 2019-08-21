import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import DashboardPage from './components/dashboard/DashboardPage';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import CreateItemPage from './components/budgetTable/CreateItemPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={DashboardPage} />
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/create' component={CreateItemPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
