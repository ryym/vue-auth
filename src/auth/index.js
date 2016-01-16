// src/auth/index.js

import { router } from '../index';

const SIGNUP_URL = `${API_URL}/users/`;
const TOKEN_KEY = 'vue-auth_id-token';

export default {
  user: {
    authenticated: false
  },

  _loggedIn() { this.user.authenticated = true; },

  _loggedOut() { this.user.authenticated = false; },

  signup(context, creds, redirect) {
    return context.$http
      .post(SIGNUP_URL, creds)
      .then(res => {
        localStorage.setItem(TOKEN_KEY, res.data.id_token);
        this._loggedIn();
        redirect && router.go(redirect);
      });
  }
};
