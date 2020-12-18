import Vue from 'vue';
import Vuex from 'vuex';
import currentUser from './modules/currentUser';
import firestore from './modules/firestore';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        currentUser,
        firestore,
    }
});