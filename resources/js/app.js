// Imports
import Vue from 'vue'
import 'vue-plyr/dist/vue-plyr.css'

// Vue instance
new Vue({
    el: '#site',

    components: {
        Player: require('./components/Player.vue'),
    },

    data() {
        return {
            navOpen: false
        }
    },

    methods: {
        toggleNav() {
            this.navOpen = !this.navOpen
        }
    }
});
