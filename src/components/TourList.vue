<template>
    <div>
        <ul>
            <li class="listItem" v-for="tour in tours" :key="tour.Name">
                <span>{{ tour.Weg }}</span>
                <span>{{ tour.Gipfel }} ( {{ tour.Gebiet }} )</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TourList',
    props: {
        tours: {
            type: Array,
            required: true,
            default: function() {
                return this.$store.state.tours;
            }
        }
    }
}
</script>
<style scoped>
    ul{
        padding-left: 5%;
    }
    .listOfItems {
        max-width: 100%;
        overflow-x: scroll;
    }
    .listItem {
        white-space: nowrap;
        text-align: left !important;
        list-style-type: none;
    }
    .inputQuantity {
        width: 3rem;
    }
</style>
