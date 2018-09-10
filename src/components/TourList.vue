<template>
    <div class="table">
        <div class="loading" v-if="!filteredTourList">
            Loading...
        </div>

        <div v-if="error" class="error">
            An error occured: {{ error }}
        </div>

        <div v-if="filteredTourList" class="content">
            <table>
                <thead>
                    <th rowspan="2" width="60vw">Weg</th>
                    <th width="40vw">Grad</th>
                </thead>
                <tr class="listItem" v-for="tour in filteredTourList" :key="tour.Name">
                    <template>
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
  name: "TourList",
  data() {
    return {
      error: null
    }
  },
  computed: {
    filteredTourList() {
      return this.$store.getters.allTours
    }
  },
  created() {
    this.$store.dispatch("fetchTourData")
  }
};
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
    padding-bottom: 0.8em;
  }
}
.colored {
  background-color: #faf8f8;
}
.tour-details {
  color: $font-grey;
  font-size: 0.8em;
  line-height: 0.8em;
}
.listItem {
  white-space: nowrap;
}
.listItem:nth-child(odd) {
  background-color: #faf8f8;
}
</style>
