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
        { id: 1, name: "i5 7400", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f" },
        { id: 2, name: "Banana", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f"  },
        { id: 3, name: "Manzana", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f"  },
        { id: 4, name: "Pera", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f"  },
        { id: 5, name: "Durazno", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f"  },
        { id: 6, name: "Mango", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f"  },
        { id: 7, name: "Ciruela", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f"  },
        { id: 8, name: "Frambuesa", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f" },
        { id: 9, name: "Kiwi", img:"https://firebasestorage.googleapis.com/v0/b/horus-1f822.appspot.com/o/i5-image.jpg?alt=media&token=db403cf4-2de6-4548-8b76-3c9ba286262f"  },
      ],
    };
  },
};
</script>