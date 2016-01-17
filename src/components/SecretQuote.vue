<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Get a Secret Chuck Norris Quote!</h1>
    <div class="alert alert-danger" v-if="error">
      {{ error }}
    </div>
    <button class="btn btn-warning" @click="getQuote">
    Get a Quote
    </button>
    <div class="quote-area" v-if="quote">
      <h2>
        <blockquote>{{ quote }}</blockquote>
      </h2>
    </div>
  </div>
</template>

<script>

import auth from '../auth';

export default {
  data() {
    return {
      quote: '',
      error: ''
    };
  },
  methods: {
    getQuote() {
      this.$http
        .get(
          `${API_URL}/api/protected/random-quote`, {},
          { headers: auth.getAuthHeader() }
          )
        .then(res => {
          this.quote = res.data;
        })
        .catch(() => {
          this.error = 'Please login to get a secret chunk.';
        });
    }
  }
};

</script>
