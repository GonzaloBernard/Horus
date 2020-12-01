<template>
  <div id="products">
    <b-row>
      <b-col cols="4">
        <filter-menu />
      </b-col>
      <b-col>
        <product-card />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import FilterMenu from "../components/FilterMenu.vue";
// @ is an alias to /src
export default {
  components: { ProductCard, FilterMenu },
  name: "Products",
};
</script>

<style scoped>
div{margin:5px}
</style>