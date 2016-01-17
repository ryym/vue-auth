<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><a v-link="'home'">Home</a></li>
        <li><a v-link="'signup'">Signup</a></li>
        <li><a v-link="'login'">Login</a></li>
        <li><a v-link="'secretquote'">Seqret Quote</a></li>
        <li><a v-link="'home'" @click="logout()">Logout</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

import auth from '../auth';

export default {
  methods: {
    logout() {
      auth.logout();
    }
  }
};

</script>
