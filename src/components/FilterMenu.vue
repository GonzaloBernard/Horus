<template>
  <div>
    <!-- MENU VERTICAL PARA GESTIONAR LOS FILTROS Y ORDEN DE PRODUCTOS -->
    <b-nav vertical>
      <b-nav-item @click="limpiarFiltro">LIMPAR FILTRO y ORDEN</b-nav-item>
      <b-nav-item @click="orderbyNombre">Ordenar por id</b-nav-item>
      <b-nav-item @click="orderbyPrice">Ordenar por precio</b-nav-item>
      <!-- Lista de categorias -->
      <b-button
        v-for="categoria in getCategorias"
        :key="categoria.id"
        class="mr-auto"
        @click="aplicarFiltroCategoria(categoria.nombre)"
      >
        {{ categoria.nombre }}
      </b-button>
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FilterMenu",
  mounted() {
    //Actualiza las categorias
    this.$store.dispatch("bindCategorias");
  },
  computed: mapGetters(["getCategorias"]),
  methods: {
    orderbyPrice() {
      this.$store.dispatch("orderProductsPrice");
    },
    orderbyNombre() {
      this.$store.dispatch("orderProductsNombre");
    },
    aplicarFiltroCategoria(categoria) {
      //Pide al store que actualize los productos filtrados
      //this.$store.dispatch("fetchProductosFiltrados", categoria);
      this.$store.dispatch("bindProductosFiltrados", categoria);
      console.log(
        "El filtrado todavía no está implementado. Categoria: " + categoria
      );
    },
    limpiarFiltro() {
      //Pide al store que actualize los productos
      this.$store.dispatch("fetchProductos");
    },
  },
};
</script>