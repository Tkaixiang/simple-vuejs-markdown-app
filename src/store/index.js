import { createStore } from 'vuex'
import { marked } from "marked";
import debounce from 'lodash.debounce';

export default createStore({
    state: {
        value: "",
        markDownValue: ""
    },
    getters: {}, // Vuex version of "Computed" properties
    mutations: {
        // ============================
        // Meant for updating a singular piece of state
        // ============================

        // Convention to use uppercase
        // Note that there are many ways of defining a method: Arrow functions, traditional function and method shorthand (below)

        MODIFY_VALUE(state, value) {
            state.value = value
        },
        MODIFY_MARKDOWN_VALUE(state, value) {
            state.markDownValue = value
        }
    },
    actions: {
        // ============================
        // Meant for updating a singular piece of state
        // ============================

        // **Calls Mutations
        // Use async normally
        onValueChange: async (context, e) =>{
            context.commit('MODIFY_VALUE', e.target.value)
            context.dispatch('updateMarkDown', e.target.value)
        },
        updateMarkDown: debounce( async (context, text) => {
            context.commit('MODIFY_MARKDOWN_VALUE', marked(text)) 

            console.log(context.state.markDownValue);
        }, 100),
        resetText: async ({ commit }, e) => {
            commit('MODIFY_VALUE', '')
            commit('MODIFY_MARKDOWN_VALUE', '')
        },
    }
})