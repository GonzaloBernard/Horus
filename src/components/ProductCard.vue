<template>
  <div>
    <b-row>
      <b-card-group v-for="product in products" :key="product.id">
        <b-card
          :title="product.name"
          :img-src="product.img"
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Descripción del producto </b-card-text>

          <b-button href="#" variant="primary">Agregar Al Carrito</b-button>
        </b-card>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      // Prouctos HARDCODEADOS levantados por el card-group -- REEMPLAZAR POR CONEXION CON FIRESTORE
      products: [
        { id: 1, name: "Frutilla", img:"https://picsum.photos/600/300/?image=25" },
        { id: 2, name: "Banana", img:"https://picsum.photos/600/300/?image=25"  },
        { id: 3, name: "Manzana", img:"https://picsum.photos/600/300/?image=25"  },
        { id: 4, name: "Pera", img:"https://picsum.photos/600/300/?image=25"  },
        { id: 5, name: "Durazno", img:"https://picsum.photos/600/300/?image=25"  },
        { id: 6, name: "Mango", img:"https://picsum.photos/600/300/?image=25"  },
        { id: 7, name: "Ciruela", img:"https://picsum.photos/600/300/?image=25"  },
        { id: 8, name: "Frambuesa", img:"https://picsum.photos/600/300/?image=25" },
        { id: 9, name: "Kiwi", img:"https://picsum.photos/600/300/?image=25"  },
      ],
    };
  },
};
</script>