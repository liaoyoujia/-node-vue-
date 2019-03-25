import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home=()=>import('./views/home.vue')
const User=()=>import('./views/user.vue')
const Topic=()=>import('./views/topic.vue')

export default new VueRouter({
    routes: [{
            path: '/',
            component: Home,

        },
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/topic/:id',
            component: Topic
        }


    ]

})