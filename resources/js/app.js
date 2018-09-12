// Imports
import Vue from 'vue'

// Vue instance
new Vue({
    el: '#form',
    data: {
        showForm: false
    },
    methods: {
        toggleForm() {
            this.showForm = ! this.showForm
        },
    }
});
