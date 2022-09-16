import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js'
import App from './App.vue.js'

let vm = new Vue({
    el: '#app',
    render: h=>h(App)
})