<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import store from './store';

export default {
  name: 'App',
  store,
  components: {
    Navbar
  }
}
</script>

<style>
</style>
