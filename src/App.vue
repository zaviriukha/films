<template>
    <div id="app">
      <div class="wrap-nav">
        <div id="nav">
          <router-link v-if="authenticated" to="/secure" class="logo"><img src="./assets/logo.png" alt="logo">Wof-wof Films</router-link>
          <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace class="logout">Logout</router-link>
        </div>  
      </div>
      <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "nraboy",
        password: "password"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Asap:400,700");
@import url("../src/assets/css/app.css");
@import url("../src/assets/css/secure.css");
@import url("../src/assets/css/login.css");
@import url("../src/assets/css/more.css");
@import url("../src/assets/css/genres.css");
@import url("../src/assets/css/favorites.css");
</style>