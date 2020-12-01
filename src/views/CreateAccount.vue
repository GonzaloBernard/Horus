<template>
  <div>
    <!-- FORMULARIO ALTA DE USUARIO -->
    <b-form @submit.prevent="createAccount" v-if="show">
      <h1>Crear cuenta</h1>
      <b-form-group
        id="input-group-1"
        label="Ingrese su nombre"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Ingrese su apellido"
        label-for="input-surname"
      >
        <b-form-input
          id="input-surname"
          v-model="form.surname"
          type="text"
          required
          placeholder="Apellido"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Ingrese su dirección"
        label-for="input-address"
      >
        <b-form-input
          id="input-address"
          v-model="form.address"
          type="text"
          required
          placeholder="Dirección"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
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
        id="input-group-5"
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
      <b-form-group
        id="input-group-6"
        label="Vuelva a ingresar su contraseña"
        label-for="input-password-confirm"
      >
        <b-form-input
          id="input-password-confirm"
          v-model="form.passwordConfirm"
          type="password"
          required
          placeholder="Repita la Contraseña"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Crear cuenta</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
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
        name: "",
        surname: "",
        adress: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      show: true,
    };
  },
  methods: {
    asyncAlert(m) {
      setTimeout(function () {
        alert(m);
      }, 1);
    },
    // Validar datos
    validate(email, password, passwordConfirm) {
      console.log("Validar datos" + email + password + passwordConfirm);
      return true;
    },
    // Crear cuenta
    createAccount() {
      if (
        this.validate(
          this.form.email,
          this.form.password,
          this.form.passwordConfirm
        )
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            alert("Usuario creado con éxito");
            this.$router.replace("/");
            //alert("Usuario creado con éxito");
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            console.log("ERROR: #" + errorCode + " / " + errorMessage);
            // ...
          });
      }
    },
  },
};
</script>

<style scoped>
div {
  margin: 20px;
}
</style>