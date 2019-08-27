import authReducer from './authReducer';
import itemReducer from './itemReducer';
import filtersReducer from './filtersReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  item: itemReducer,
  filters: filtersReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;