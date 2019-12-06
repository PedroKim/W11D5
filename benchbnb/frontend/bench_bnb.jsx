import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// removable
import * as sessionAction from './actions/session_actions';
import * as benchAction from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        currentUser: {
          id: window.currentUser.id
        }
      },
      errors: {
        session: []
      }
    };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = sessionAction.signup;
  window.login = sessionAction.login;
  window.logout = sessionAction.logout;
  window.fetchBenches = benchAction.fetchBenches;
  
  ReactDOM.render(<Root store={store}/>, root);

  // remove these at some point
});