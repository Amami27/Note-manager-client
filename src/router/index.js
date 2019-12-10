import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import NewEntry from '../views/NewEntry.vue'
import AllNotes from '../views/AllNotes.vue'
import SingleNote from '../views/SingleNote.vue'
import EditEntry from '../views/EditEntry.vue'





Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/Register',
        name: 'register',
        component: Register
    },

    {
        path: '/Login',
        name: 'login',
        component: Login
    },

    {
        path: '/NewEntry',
        name: 'new',
        component: NewEntry
    },

    {
        path: '/AllNotes',
        name: 'notes',
        component: AllNotes
    },

    {
        path: '/note/:noteid',
        name: 'single',
        component: SingleNote
    },
    {
        path: '/EditEntry',
        name: 'edit',
        component: EditEntry
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router