<template>
    <div class="table">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            An error occured: {{ error }}
        </div>

        <div v-if="allTours" class="content">
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
    </div>
</template>

<script>
export default {
    name: 'TourList',
    data () {
        return {
            cellColor: true,
            loading: false,
            error: null,
            allTours: null
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
            function status(response) {
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            }
            this.loading = true
            if ( !this.isFetched ){
                let con = console;
                fetch('https://api.myjson.com/bins/nbj3g')
                .then( status )
                .then( response => response.json())
                .then( json => {
                    this.allTours = json
                    this.loading = false
                    if ( process.env.NODE_ENV !== 'production') {
                        con.log(json.length + "tours where fetched")
                    }
                })
                .catch( error => {
                    this.error = error
                    this.loading = false
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
