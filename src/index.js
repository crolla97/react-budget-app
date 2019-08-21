import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware, compose } from 'redux';
import { firebase} from './config/fbConfig';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider} from 'react-redux-firebase';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk)
));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App/>
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();