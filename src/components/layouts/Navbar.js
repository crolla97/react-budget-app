import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
// import { connect } from 'react-redux'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/dashboard' className="brand-logo">Budget App</Link>
        <SignedInLinks />
      </div>
    </nav>
  )
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     auth: state.firebase.auth,
//     profile: state.firebase.profile
//   }
// }

export default Navbar;