<template>
    <div v-show="this.showFilter">
        <button>Gipfel</button>
        <button>Gebiet</button>
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

<style lang="scss" scoped>
    button{
        width: 50%;
    }
</style>
