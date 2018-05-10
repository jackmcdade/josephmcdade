<template>
    <svg ref="icon" :data-src="svg"></svg>
</template>

<script>
    export default {
        props: ['name'],

        computed: {
            svg() {
                return '/img/svg/' + this.name + '.svg';
            }
        },

        mounted() {
            SVGInjector.inject(this.$refs.icon);
        }
    }
</script>
