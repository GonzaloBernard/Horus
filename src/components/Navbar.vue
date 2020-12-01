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
      <!-- Mostrar boton LOGIN si no hay usuario conectado y la pagina actual no es login -->
      <b-button
        v-if="getCurrentUser === null && this.$route.path !== '/login'"
        class="ml-auto"
        @click="login"
      >
        LOGIN
      </b-button>
      <!-- Mostrar boton CREAR CUENTA si no hay usuario conectado y la pagina actual no es login -->
      <b-button
        v-if="getCurrentUser === null && this.$route.path !== '/createAccount'"
        class="ml-auto"
        @click="createAccount"
      >
        CREAR CUENTA
      </b-button>
      <!-- Mostrar usuario y boton LOGOUT si hay usuario conectado -->
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
    createAccount() {
      // Si la ruta actual es /createAccount, no hacer nada. Caso contrario redirigir a /createAccount
      if (this.$route.path !== "/createAccount") {
        this.$router.replace("createAccount");
      }
    },
    logout() {
      firebase.default
        .auth()
        .signOut()
        .then(
          function () {
            this.$store.commit("setNewCurrentUser", null);
            // Redirigir a Home despues de cerrar sesion
            if (this.$route.path !== "/") {
              this.$router.replace("/");
            }
            // Sign-out successful.
          }.bind(this)
        )
        .catch(function (error) {
          // An error happened.
          console.log(error.message);
        });
    },
  },
  computed: mapGetters(["getCurrentUser"]),
};
</script>