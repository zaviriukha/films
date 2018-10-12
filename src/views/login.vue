<template>
    <div>
        <div id="login">
            <h1>Login</h1>
            Login: <input type="text" name="username" v-model="input.username" placeholder="Username" />
            Password: <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <div class="log-butt">
                <button type="button" v-on:click="login()">Login</button>
                <a href="#">Forgot password</a>
            </div>
        </div>
        <div class="hint">
          <h2>Hint</h2>
           <p>Login: nraboy</p>
           <p>Password: password</p>
        </div>
    </div>    
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 300px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
}
#login h1 {
  margin-bottom: 10px;
  border-bottom: 1px solid;
  padding-bottom: 10px;
}
#login input {
  width: 274px;
  margin: 7px 0px 7px;
}
.log-butt {
  display: flex;
  justify-content: space-between;
}
.log-butt a {
  display: block;
  margin-top: 16px;
  font-size: 12px;
}
.log-butt button {
  width: 70px;
  cursor: pointer;
  padding: 5px;
  display: block;
  font-size: 16px;
  margin-top: 10px;
  background-color: blue;
  border: none;
  border-radius: 3px;
  color: #fff;
}
.hint {
  width: 300px;
  margin: auto;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 20px;
  margin-top: 50px;
}
</style>