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
      <b-button v-if="getCurrentUser === null" class="ml-auto" @click="login">
        LOGIN
      </b-button>
      <b-button v-if="getCurrentUser !== null" class="ml-auto">
        {{ getCurrentUser }}
      </b-button>
      <b-button v-if="getCurrentUser !== null" class="ml-auto" @click="logout">
        LOGOUT
      </b-button>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import { mapGetters /*mapActions*/ } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      email: "",
      password: "",
      user: "",
    };
  },
  methods: {
    login() {
      // Si la ruta actual es /login, no hacer nada. Caso contrario redirigir a /login
      if (this.$route.path !== "/login") {
        this.$router.replace("login");
      }
    },
    async logout() {
      firebase.default
        .auth()
        .signOut()
        .then(
          function () {
            this.$store.commit("setNewCurrentUser", null);
            // Sign-out successful.
          }.bind(this)
        )
        .catch(function (error) {
          // An error happened.
          console.log(error);
        });
    },
  },
  computed: mapGetters(["getCurrentUser"]),
};
</script>