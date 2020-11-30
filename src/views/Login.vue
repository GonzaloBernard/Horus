<template>
  <div>
    <div class="container">
      <h1>Iniciar sesión</h1>
      <form class="row" @submit.prevent="logIn">
        <div class="col-sm">
          <label for="">
            <input
              type="text"
              v-model="loginEmail"
              placeholder="Correo Electrónico"
            />
          </label>
        </div>
        <div class="col-sm">
          <label for="">
            <input
              type="password"
              v-model="loginPassword"
              placeholder="Contraseña"
            />
          </label>
        </div>
        <div class="col-sm"><input type="submit" value="Login" /></div>
      </form>
    </div>
    <div class="container">
      <h1>Crear cuenta</h1>
      <form class="row" @submit.prevent="createAccount">
        <div class="col-sm">
          <label for="">
            <input
              type="text"
              v-model="email"
              placeholder="Correo Electrónico"
            />
          </label>
        </div>
        <div class="col-sm">
          <label for="">
            <input
              type="password"
              v-model="password"
              placeholder="Contraseña"
            />
          </label>
        </div>
        <div class="col-sm">
          <label for="">
            <input
              type="password"
              v-model="passwordConfirm"
              placeholder="Confirmar Contraseña"
            />
          </label>
        </div>
        <div class="col-sm"><input type="submit" value="Crear Cuenta" /></div>
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
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    // Iniciar sesion de usuario
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then(() => {
          this.$router.replace("/");
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    // Validar datos 
    validate(email, password, passwordConfirm) {
      console.log("Validar datos"+email+password+passwordConfirm);
      return true;
    },
    // Crear cuenta
    createAccount() {
      if (this.validate(this.email, this.password, this.passwordConfirm)) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(()=>{
            alert('Usuario creado con éxito');
            this.$router.replace("/");
            })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            console.log("ERROR: #"+errorCode+" / "+errorMessage);
            // ...
          });
      }
    },
  },
};
</script>