
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('task-list', require('./components/TaskList.vue'));
Vue.component('extraPage', require('./components/ExampleComponent.vue'));

/* VueJS Routes */
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'task-list',
        component: require('./components/TaskList.vue')
    },
    {
        path: '/extra',
        name: 'extraPage',
        component: require('./components/ExampleComponent.vue')
    }
]

const router = new VueRouter({ routes });

//create dat vuejs root instance
const app = new Vue({
    el: '#app'
});
