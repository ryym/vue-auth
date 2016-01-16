<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Log In</h1>
    <p>
      Log in to your account to get some great quotes.
    </p>
    <div class="alert alert-danger" v-if="error">
      {{ error }}
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="creds.username">
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="creds.password">
    </div>
    <button class="btn btn-primary" @click="login">
      Login
    </button>
  </div>
</template>

<script>

import auth from '../auth';

export default {
  data() {
    return {
      creds: {
        username: '',
        password: ''
      },
      error: ''
    };
  },
  methods: {
    login() {
      const creds = Object.assign({}, this.creds);
      auth.login(this, creds, 'home')
        .catch(() => {
          this.error = 'Invalid username or password.';
        });
    }
  }
};

</script>
