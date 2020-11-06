<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      
      <!-- Opciones del menú que son colapsables -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/">HORUS</b-nav-item>
          <b-nav-item href="#/products">Productos</b-nav-item>
          <b-nav-item href="#/build">Armá tu Build</b-nav-item>
          <b-nav-item href="#/contact">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      
      <!-- Formulario de LogIn -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <div class="container">
            <form class="row" @submit.prevent="logIn">
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
              <div class="col-sm"><input type="submit" value="Login" /></div>
            </form>
          </div>
        </b-nav-form>
      </b-navbar-nav>
      
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
export default {
  name: "Navbar",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("private");
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
  },
};
</script>