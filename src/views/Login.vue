<template>
  <div>
    <!-- FORMULARIO ALTA DE USUARIO -->
    <b-form @submit.prevent="login" v-if="show">
      <h1>Iniciar sesión</h1>
      <b-form-group
        id="input-group-1"
        label="Ingrese su correo electrónico"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Correo electrónico"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Ingrese su contraseña"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="Contraseña"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Iniciar sesión</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <hr>
    
      <button @click="socialLogin" class="social-button">
        <img alt="Google Logo" src="../assets/google-logo.png">
      </button>
    <p>O inicie sesión con Google</p>
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
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    // Iniciar sesion de usuario
    login() {
      this.validate(this.form.email, this.form.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.form.email,
          this.form.password
        )
        .then(() => {
          this.$router.replace("/");
        })
        .catch(function (error) {
          alert(error.message);
          console.log(error.message);
        });
    },
    // Validar datos
    validate(email, password) {
      console.log("Validar datos: " + email + password);
      return true;
    },
  socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          alert(result);
          this.$router.replace('home');
        }).catch((err) => {
          alert('Oops. ' + err.message)
        });
      },
}
}
</script>

<style scoped>
div {
  margin: 20px;
}

.social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .social-button img {
    width: 100%;
  }
</style>