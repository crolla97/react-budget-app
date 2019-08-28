import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect} from 'react-redux';
import { startSignOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  // const { profile } = props
  return (
    <ul className="right">
      <li><NavLink to='/create'>Add Item</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CC</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(startSignOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);