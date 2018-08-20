<template>
    <div v-show="this.showFilter">
        <button> LAlala </button>
    </div>
</template>

<script>
    export default {
        name: 'Filterbox',
        computed: {
            showFilter () {
                return this.$store.getters.getFilterVisisbility
            }
        }
    }
</script>

<style scoped>

</style>