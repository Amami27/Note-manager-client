import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Notes: [],
        currentNote: [],
        response: {
            type: '',
            message: ''
        }

    },

    getters: {
        allNotes: state => state.Notes,
        getCurrentNote: (state) => {
            console.log('currentNote', state.currentNote)
            return state.currentNote;
        }
    },
    mutations: {
        setResponse: (state, payload) => {
            state.response = {
                type: payload.type,
                message: payload.message
            }
        },
        getNotes: (state, Notes) => {
            state.Notes = Notes
        },

        singleNote: (state, currentNote) => {
            state.currentNote = currentNote
            console.log('current', currentNote);
        }

    },
    actions: {
        async getAll({ commit }) {
            try {
                const response = await axios.get('http://localhost:9000/allnotes');
                console.log(response.data);
                commit('getNotes', response.data.data)
            } catch (error) {
                console.error(error);
            }
        },
        async getOne({ commit }, id) {
            try {
                const response = await axios.get(`http://localhost:9000/singlenote/${id}`);
                console.log(response.data);
                commit('singleNote', response.data.data)
            } catch (error) {
                console.error(error)
            }
        },
        // eslint-disable-next-line no-unused-vars
        async deleteNote({ commit }, id) {
            try {
                const response = await axios.delete(`http://localhost:9000/delete/${id}`);
                console.log(response.message);
            } catch (error) {
                console.error(error)
            }
        }
    },
    modules: {}

})