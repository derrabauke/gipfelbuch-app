<template>
    <div class="search-wrapper">
        <input v-on:input="setFilterText($event.target.value)" type="text" name="search" placeholder="Search..">
        <button @click="showFilterBar()"></button>
        <Filterbox></Filterbox>
    </div>
</template>

<script>
    import Filterbox from "@/components/Filterbox.vue"

    export default {
        name: 'AdvancedSearchBar',
        components: {
            Filterbox
        },
        computed: {
            searchText() {
                return this.$store.getters.searchText
            }
        },
        methods: {
            setFilterText(newValue) {
                this.$store.dispatch("setFilter", newValue)
            },
            showFilterBar: function() {
                this.$store.commit('showFilterBar');
            }
        }
    }
</script>

<style scoped lang="scss">
.search-wrapper {
  width: 100%;
}
input {
  height: 2em;
  width: 89%;
  font-size: 1em;
  padding-left: 23px;
  margin-right: 1%;
  box-sizing: border-box;
  border: 2px solid $dark-green;
  border-radius: 6px;
  background-position: 6px 6px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TZWFyY2hJY29AM3g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iU2VhcmNoSWNvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIiBzdHJva2U9IiM1RDUzNTMiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iNCIgY3k9IjQiIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICA8cGF0aCBkPSJNNy40MjA2MDU2Nyw3LjA3MjI2MzQyIEM3LjE0MDIwMTg5LDcuMjc3NjQ2NSA3LDcuNTI5NzIzNjcgNyw3LjgyODQ5NDk5IEM3LDguMTI3MjY2MjYgNy4yMjU2MDczNyw4LjU5MDU5MTI4IDcuNjc2ODIyMSw5LjIxODQ2OTkgTDExLjM2OTc0NDMsMTMgTDEzLDExLjU3ODEwNDcgTDkuNDIxNzI3MzEsNy44Mjg0OTQ5OSBDOC45OTA0MjEzNCw3LjQyMDY5MTg0IDguNjQ3Mjg3MjQsNy4xNjg2MTQ2NiA4LjM5MjMyNDk0LDcuMDcyMjYzNDIgQzguMTM3MzYyNjMsNi45NzU5MTIxOSA3LjgxMzQ1NjIxLDYuOTc1OTEyMTkgNy40MjA2MDU2Nyw3LjA3MjI2MzQyIFoiIGlkPSJQYXRoLTIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
}
input:focus {
  outline: none;
  border: 2px solid $light-green;
}
button {
  width: 10%;
  height: 2em;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  border: none;
  outline: none;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTkgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Ecm9wRG93bkFycm93QDN4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFwcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM2NS4wMDAwMDAsIC0xMTEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiM1NzU0NTQiPgogICAgICAgICAgICA8ZyBpZD0iU3VjaGZlbGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjAwMDAwMCwgMTAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkRyb3BEb3duIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMzAuNzk2MjQwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iRHJvcERvd25BcnJvdyIgcG9pbnRzPSI5LjI0NTg1NzY0IDcgMTguMDg2NDMzMSAxNi40ODU0MTMzIDI2LjMyNzkyMzMgNyI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
</style>