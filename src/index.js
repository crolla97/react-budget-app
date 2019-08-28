import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App, { history } from './routers/App';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware, compose } from 'redux';
import { firebase} from './config/fbConfig';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider} from 'react-redux-firebase';
import rootReducer from './store/reducers/rootReducer';
import { startSetItems } from './store/actions/itemActions';
import { login, logout } from './store/actions/authActions';
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

const jsx = (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App/>
    </ReactReduxFirebaseProvider>
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetItems()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    });
  } else{
    store.dispatch(logout())
    renderApp();
    history.push('/');
  }
});

serviceWorker.unregister();