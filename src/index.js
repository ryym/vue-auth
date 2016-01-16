// src/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/home': {
    component: Home
  }
});

router.redirect({
  '*': '/home'
});

router.start(App, 'div');
