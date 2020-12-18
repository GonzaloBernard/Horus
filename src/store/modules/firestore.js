import { vuexfireMutations /*firestoreAction */ } from "vuexfire";
//import { db } from "../../Firebase";

const state = {
  productos: [],
  db: {},
};

const actions = {
  // Esta accion lee por unica vez (sin real time update) los productos
  fetchProductos({ commit }) {
    state.db
      .collection("productos")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          //this.$router.push('/HelloWorld')
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
  }
};

export default {
  state,
  actions,
  getters,
  mutations,
};
