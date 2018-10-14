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

body {
  background-color: #f0f0f0;
  margin: 0px;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
  font-family: "Asap", sans-serif;
}
.wrap-nav {
  width: 100%;
  background-color: blue;
}
#nav {
  max-width: 1200px;
  margin: auto;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nav .logo {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
}
#nav .logo img {
  width: 40px;
  padding-right: 10px;
}
#nav .logout {
  color: #fff;
  text-decoration: none;
}
</style>