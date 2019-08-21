import authReducer from './authReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  item: itemReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;