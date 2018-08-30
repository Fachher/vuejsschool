import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const counterModule = {
    namespaced: true // don't pollute the global namespace

    // state: { count: 0 },
    // mutations: {
    //     // @ts-ignore
    //     increment({ state, commit, rootState }) {
    //         if ((state.count + rootState.count) % 2 === 1) {
    //             commit('increment')
    //         }
    //     }
    // },
    //
    // getters: {
    //     // @ts-ignore
    //     sumWithRootCount (state, getters, rootState) { // called by commit('counter/increment')
    //         return state.count + rootState.count
    //     }
    // }
};

const todosModule = {
    namespaced: false
    // state: { todos: [] }
};

export default new Vuex.Store({
    // split states into modules to avoid bloat
    // store.state.a & store.state.b
    modules: {
        counter: counterModule,
        todosModule: todosModule
    },

    state: {
        count: 0,
        todos: [{
            id: 1,
            text: 'programming',
            done: true
        }, {
            id: 2,
            text: 'eating',
            done: false
        }, {
            id: 3,
            text: 'sleeping',
            done: true
        }]
    },
    // must be synchronous
    mutations: {
        increment(state) {
            state.count++;
        },
        addTodo(state, todo) {
            state.todos.push(todo);
        }
    },

    // Instead of mutating the state, actions commit mutations.
    // Actions can contain arbitrary asynchronous operations.
    actions: {
        incrementAsync(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000);
        },
        addTodo({commit}, todo) {
            commit('addTodo', todo)
        },
        async asyncAction ({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment');
                    resolve()
                }, 2000)
            })
        },
        async asyncAction2({commit, dispatch}){
            await dispatch('asyncAction');
            console.log('dispatching completed');
        }
        // NICE EXAMPLE
        // checkout ({ commit, state }, products) {
        //     // save the items currently in the cart
        //     const savedCartItems = [...state.cart.added];
        //     // send out checkout request, and optimistically
        //     // clear the cart
        //     commit(types.CHECKOUT_REQUEST);
        //     // the shop API accepts a success callback and a failure callback
        //     shop.buyProducts(
        //         products,
        //         // handle success
        //         () => commit(types.CHECKOUT_SUCCESS),
        //         // handle failure
        //         () => commit(types.CHECKOUT_FAILURE, savedCartItems)
        //     )
        // }

    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    },
    plugins: []
})
