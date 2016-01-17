<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Sign Up</h1>
    <p>
      Sign up for a free account to get some great quotes.
    </p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="alert alert-success" v-if="success">
      <p>{{ success }}</p>
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
    <button class="btn btn-primary" @click="submit">
      Access
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
      success: '',
      error: ''
    };
  },
  methods: {
    submit() {
      this.error = this.success = '';
      const creds = Object.assign({}, this.creds);
      auth.signup(this, creds, 'secretquote')
        .then(() => this.success = 'Signed up successfully.')
        .catch(res => this.error = res.data);
    }
  }
};

</script>
