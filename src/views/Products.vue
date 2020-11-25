<template>
  <div id="products">
    <b-row>
      <b-col cols="2">
        <filter-menu />
      </b-col>
      <b-col cols="10">
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