import contactos from './contacts'
import Vue from './vue'

new Vue({
    render: h => h(contactos)
}).$mount("#app")