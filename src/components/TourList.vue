<template>
    <div>
        <table class="tour-table">
            <thead>
                <th rowspan="2" width="60vw">Weg</th>
                <th width="40vw">Grad</th>
            </thead>
            <tr class="listItem" v-for="tour in tours" :key="tour.Name">
                <template v-if="getCellColor()">
                    <td class="colored">{{ tour.Weg }}<br/>
                    <span class="tour-details">{{ tour.Gipfel }} ( {{ tour.Gebiet }} )</span></td>
                    <td class="grad-style colored">{{tour.af}}</td>
                </template>
                <template v-else>
                    <td>{{ tour.Weg }}<br/>
                    <span class="tour-details">{{ tour.Gipfel }} ( {{ tour.Gebiet }} )</span></td>
                    <td class="grad-style">{{tour.af}}</td>
                </template>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TourList',
    data: function() {
        return {
            cellColor: true
        }
    },
    methods: {
        getCellColor() {
            if ( this.cellColor ){
                this.cellColor = !this.cellColor;
            }
            return !this.cellColor;
        }
    },
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
    .tour-table {
        width: 100%;
        margin: 0 auto;
        text-align: left;
    }
    thead {
        text-align: center;
    }
    th {
        background-color: #FCF6EE;
        border: 1px solid #9B9B9B;
    }
    td {
        line-height: 1em;
        padding-left: 1%;
    }
    .colored {
        background-color: #FAF8F8;
    }
    .tour-details {
        color: grey;
        font-size: .8em;
        line-height: .8em;
    }
    td.grad-style {
        padding-bottom: .8em;
    }
    .listItem {
        white-space: nowrap;
    }
</style>
