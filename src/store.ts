import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        followed: [],
        favorite: []
    },
    mutations: {
        addFavorite(state, shipment){
            state.favorite.push(shipment)
        },
        addFollow(state, shipment){
            state.followed.push()
        }

    }

})
