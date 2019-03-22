import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/home.vue'
import User from './views/user.vue'
export default new VueRouter({
    routes: [{
        path: '/',
        component: Home,

    }, {
        path: '/user/:id',
        component: User
    }]

})