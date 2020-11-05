<template>
  <!--
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#/">HORUS</b-navbar-brand>
      <b-navbar-brand href="#/products">Productos</b-navbar-brand>
      <b-navbar-brand href="#/build">Armá tu Build</b-navbar-brand>
      <b-navbar-brand href="#/contact">Contacto</b-navbar-brand>
      <b-navbar-brand class="ml-auto" href="#">Zaapii</b-navbar-brand>
    </b-navbar>
  </div>
-->
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/">HORUS</b-nav-item>
          <b-nav-item href="#/products">Productos</b-nav-item>
          <b-nav-item href="#/build">Armá tu Build</b-nav-item>
          <b-nav-item href="#/contact">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>