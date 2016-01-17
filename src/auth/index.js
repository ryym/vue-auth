// src/auth/index.js

import { router } from '../index';

const LOGIN_URL = `${API_URL}/sessions/create`;
const SIGNUP_URL = `${API_URL}/users/`;
const TOKEN_KEY = 'vue-auth_id-token';

export default {
  user: {
    name: '',
    authenticated: false
  },

  _handlers: [],

  _loggedIn(name) {
    this.user.name = name;
    this.user.authenticated = true;
    this._pushChange();
  },

  _loggedOut() {
    this.user.name = '';
    this.user.authenticated = false;
    this._pushChange();
  },

  _pushChange() {
    this._handlers.forEach(handle => handle(this.user));
  },

  _storeToken(data) { localStorage.setItem(TOKEN_KEY, data.id_token); },

  _getStoredToken() { return localStorage.getItem(TOKEN_KEY); },

  signup(context, creds, redirect) {
    return context.$http
      .post(SIGNUP_URL, creds)
      .then(res => {
        this._storeToken(res.data);
        this._loggedIn(creds.username);
        redirect && router.go(redirect);
      });
  },

  // Send a request to the login URL and save the returned JWT.
  login(context, creds, redirect) {
    return context.$http
      .post(LOGIN_URL, creds)
      .then(res => {
        this._storeToken(res.data);
        this._loggedIn(creds.username);
        redirect && router.go(redirect);
      });
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this._loggedOut();
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
  },

  subscribe(onChange) {
    this._handlers.push(onChange);
  }
};
