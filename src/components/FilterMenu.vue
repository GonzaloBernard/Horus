<template>
  <div>
    <!-- MENU VERTICAL PARA GESTIONAR LOS FILTROS Y ORDEN DE PRODUCTOS -->
    <b-nav vertical>
      <b-nav-item  @click="limpiarFiltro">LIMPIPAR FILTRO y ORDEN</b-nav-item>
      <b-nav-item  @click="orderbyNombre">Ordenar por id</b-nav-item>
      <b-nav-item  @click="orderbyPrice">Ordenar por precio</b-nav-item>
      
      <b-button class="ml-auto" @click="aplicarFiltroCategoria('Procesador')">
        Procesadores
      </b-button>
      <b-button class="ml-auto" @click="aplicarFiltroCategoria('Motherboard')">
        Placas madre
      </b-button>
      <b-button class="ml-auto" @click="aplicarFiltroCategoria('Storage')">
        Discos
      </b-button>
      <b-button class="ml-auto" @click="aplicarFiltroCategoria('Ram')">
        Memorias RAM
      </b-button>
      
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "FilterMenu",
  methods: {
    orderbyPrice() {
      this.$store.dispatch("orderProductsPrice");
    },
    orderbyNombre() {
      this.$store.dispatch("orderProductsNombre");
    },
    aplicarFiltroCategoria(categoria) {
      //Cuando el componente esta listo se pide al store que actualize los productos
      this.$store.dispatch("fetchProductosFiltrados", categoria);
    },
    limpiarFiltro() {
      //Cuando el componente esta listo se pide al store que actualize los productos
      this.$store.dispatch("fetchProductos");
    },
  },
};
</script>