import { vuexfireMutations /*firestoreAction */ } from "vuexfire";
//import { db } from "../../Firebase";

const state = {
  productos: [],
  db: {},
};

const actions = {
  orderProductsPrice(){
    state.productos.sort((a, b) => a.price - b.price);
  },
  
  orderProductsNombre(){
    state.productos.sort((a, b) => a.id - b.id);
  },
  // Esta accion lee por unica vez (sin real time update) los productos filtrados por categoria
  fetchProductos({ commit }) {
    state.db
      .collection("productos")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          alert("No hay productos en la tienda");
        } else {
          this.loading = false;
          var productos = [];
          querySnapshot.forEach((doc) => {
            productos.push(doc.data());
          });

          commit("FETCH_PRODUCTOS", productos);
        }
      });
  },
  // Esta accion lee por unica vez (sin real time update) los productos filtrados por categoria
  fetchProductosFiltrados({ commit }, categoria) {
    console.log(categoria);
    state.db
      .collection("productos")
      // Filtra por categoria
      .where("categoria", "==", categoria)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          alert("No hay productos con las características solicitadas");
        } else {
          this.loading = false;
          var productos = [];
          querySnapshot.forEach((doc) => {
            productos.push(doc.data());
          });

          commit("FETCH_PRODUCTOS", productos);
        }
      });
  },
};

const getters = {
  database: (state) => state.db,
  getProductos: (state) => state.productos,
};

const mutations = {
  ...vuexfireMutations,
  SET_DATABASE: (state, db) => {
    state.db = db;
  },
  FETCH_PRODUCTOS(state, val) {
    state.productos = val;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
