import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
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
        }

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
