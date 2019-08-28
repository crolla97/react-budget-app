import { firebase, googleAuthProvider, auth } from '../../config/fbConfig';

export const login = (uid) => ({
  type: 'LOGIN_SUCCESS',
  uid
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT_SUCCESS'
})

export const startSignOut = () => {
  return (dispatch, getState) => {
    auth.signOut();
  }
}

