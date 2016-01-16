// src/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/App.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

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
