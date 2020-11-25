<template>
  <div>
    <div class="container">
      <h1>Inicie sesión</h1>
      <form class="row" @submit.prevent="logIn">
        <div class="col-sm">
          <label for="">
            <input type="text" v-model="loginEmail" />
          </label>
        </div>
        <div class="col-sm">
          <label for="">
            <input type="password" v-model="loginPassword" />
          </label>
        </div>
        <div class="col-sm"><input type="submit" value="Login" /></div>
      </form>
    </div>
    <div class="container">
      <h1>Crear cuenta</h1>
      <form class="row" @submit.prevent="createAcount">
        <div class="col-sm">
          <label for="">
            <input type="text" v-model="email" />
          </label>
        </div>
        <div class="col-sm">
          <label for="">
            <input type="password" v-model="password" />
          </label>
        </div>
        <div class="col-sm"><input type="submit" value="CreateAccount" /></div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
export default {
  name: "login",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      email:"",
      password:"",
    };
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then(() => {
          this.$router.replace("home");
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    createAccount() {

    }
  },
}
</script>