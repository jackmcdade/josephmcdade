
// Imports
import Vue from 'vue'
import SVGInjector from 'svg-injector-2';

// Instantiations
// Vue.use(VTooltip)

// Component Registration
Vue.component('icon', require('./components/Icon.vue'));

// Directives
// Vue.directive('tooltip', VTooltip)

// Global Methods
window.SVGInjector = new SVGInjector();

// Vue instance
new Vue({
    el: '#app',

    data: {


    },

    methods: {
        grab(list) {
            return list[Math.floor(Math.random() * list.length)]
        },

        toggleInvoice() {
            this.invoicing = ! this.invoicing
        },

        log(msg) {
            console.log(msg)
        }
    }
});
