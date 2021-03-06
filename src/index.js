// src/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import SecretQuote from './components/SecretQuote.vue';
import auth from './auth';

Vue.use(VueRouter);
Vue.use(VueResource);

export const router = new VueRouter();

router.map({
  '/home': {
    component: Home
  },
  '/signup': {
    component: Signup
  },
  '/login': {
    component: Login
  },
  '/secretquote': {
    component: SecretQuote
  }
});

router.redirect({
  '*': '/home'
});

auth.restoreUserState();
router.start(App, 'div');
