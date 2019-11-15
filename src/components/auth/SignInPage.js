import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../store/actions/authActions';

export const SignInPage = ({ startSignIn }) => {
  return (
    <div className="container">
      <div className="row center">
        <div className="col s12 m4 offset-m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Welcome to my Budget App</span>
              <p>This is a simple budgeting app created to test Firebases new database - Cloud Firestore, which handles both authorization and stores user specific budgeting items in its database.</p>
              <p>Sign in using a google account, no password required.</p>
            </div>
            <div className="card-action">
              <button onClick={startSignIn}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    startSignIn: () => dispatch(startLogin())
  }
}

export default connect(undefined, mapDispatchToProps)(SignInPage);