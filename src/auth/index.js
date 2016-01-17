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

  _getStoredToken() { return localStorage.getItem(TOKEN_KEY); },

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
  },

  // Return the object to be passed as a header for authenticated requests.
  getAuthHeader() {
    const token = this._getStoredToken() || '';
    return {
      'Authorization': `Bearer ${token}`
    };
  },

  isAuthenticated() {
    return this.user.authenticated;
  },

  // Restore the user state from local storage.
  restoreUserState() {
    const jwt = this._getStoredToken();
    jwt ? this._loggedIn() : this._loggedOut();
  }
};
