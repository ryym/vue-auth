<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li>
          <a v-link="'home'">Home</a>
        </li>
        <li>
          <a v-link="'signup'" v-if="! user.loggedIn">
            Signup
          </a>
        </li>
        <li>
          <a v-link="'login'" v-if="! user.loggedIn">
            Login
          </a>
        </li>
        <li>
          <a v-link="'secretquote'" v-if="user.loggedIn">
            Seqret Quote
          </a>
        </li>
        <li>
          <a v-link="'home'" v-if="user.loggedIn" @click="logout()">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

import auth from '../auth';

const user = {
  loggedIn: false
};

auth.subscribe(state => {
  user.loggedIn = state.authenticated;
});

export default {
  data() {
    return { user };
  },
  methods: {
    logout() {
      auth.logout();
    }
  }
};

</script>
