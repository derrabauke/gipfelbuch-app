<template>
    <div>
        <table>
            <thead>
                <th rowspan="2" width="60vw">Weg</th>
                <th width="40vw">Grad</th>
            </thead>
            <tr class="listItem" v-for="tour in allTours" :key="tour.Name">
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
    data () {
        return {
            cellColor: true,
            isFetched: false,
            allTours: []
        }
    },
    created () {
        this.fetchTourData()
    },
    methods: {
        getCellColor() {
            return this.cellColor = !this.cellColor;
        },
        fetchTourData() {
            if ( !this.isFetched ){
                let con = console;
                fetch('https://api.myjson.com/bins/nbj3g')
                .then( response => response.json())
                .then( json => {
                    this.allTours = json
                    this.isFetched = true
                    if ( process.env.NODE_ENV !== 'production') {
                        con.log(json.length + "tours where fetched")
                    }
                })
            }
        }
    }
}
</script>
<style scoped lang="scss">
    table {
        width: 100%;
        margin: 0 auto;
        text-align: left;
    }
    thead {
        text-align: center;
    }
    th {
        background-color: $light-headers;
        border: 1px solid $font-grey;
    }
    td {
        line-height: 1em;
        padding-left: 1%;
        &.grad-style {
            padding-bottom: .8em;
        }
    }
    .colored {
        background-color: #FAF8F8;
    }
    .tour-details {
        color: $font-grey;
        font-size: .8em;
        line-height: .8em;
    }
    .listItem {
        white-space: nowrap;
    }
</style>
