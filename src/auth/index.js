// src/auth/index.js

import { router } from '../index';

const LOGIN_URL = `${API_URL}/sessions/create`;
const SIGNUP_URL = `${API_URL}/users/`;
const TOKEN_KEY = 'vue-auth_id-token';

export default {
  user: {
    authenticated: false
  },

  _loggedIn() { this.user.authenticated = true; },

  _loggedOut() { this.user.authenticated = false; },

  _storeToken(data) { localStorage.setItem(TOKEN_KEY, data.id_token); },

  signup(context, creds, redirect) {
    return context.$http
      .post(SIGNUP_URL, creds)
      .then(res => {
        this._storeToken(res.data);
        this._loggedIn();
        redirect && router.go(redirect);
      });
  },

  // Send a request to the login URL and save the returned JWT.
  login(context, creds, redirect) {
    return context.$http
      .post(LOGIN_URL, creds)
      .then(res => {
        this._storeToken(res.data);
        this._loggedIn();
        redirect && router.go(redirect);
      });
  }
};
