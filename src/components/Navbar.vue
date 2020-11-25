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
      <b-button class="ml-auto" @click="login"> LOGIN </b-button>
      <b-button class="ml-auto"> {{ currentUser }} </b-button>
      <b-button class="ml-auto" @click="logout"> LOGOUT </b-button>
      <!-- Formulario de LogIn
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
      Formulario de LogIn -->
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
      user: this.currentUser,
    };
  },
  methods: {
    login() {
      this.$router.replace("login");
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
        })
        .catch(function (error) {
          // An error happened.
          console.log(error);
        });
        this.$router.replace("/home");
    },
  },

  computed: {
    currentUser: function () {
      //console.log(this.$store.state.user.data.email);
      return this.$store.state.usuario;
    },
  },
};
</script>