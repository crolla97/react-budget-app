import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../store/actions/authActions';

export const SignInPage = ({ startSignIn }) => {
  return (
    <div>
      <button onClick={startSignIn}>Login</button>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    startSignIn: () => dispatch(startLogin())
  }
}

export default connect(undefined, mapDispatchToProps)(SignInPage);