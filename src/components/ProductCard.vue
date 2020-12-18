<template>
  <div>
    <b-row>
      <b-card-group v-for="product in getProductos" :key="product.id">
        <b-card
          :title="product.nombre"
          :img-src="product.img"
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> $ {{product.price}} </b-card-text>

          <b-button href="#" variant="primary">Agregar Al Carrito</b-button>
        </b-card>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
import { mapGetters /*,  mapActions */} from "vuex";

export default {
  name: "Navbar",
  mounted() {
    this.$store.dispatch("fetchProductos");
  },
  computed: mapGetters(["getProductos"]),
};
</script>