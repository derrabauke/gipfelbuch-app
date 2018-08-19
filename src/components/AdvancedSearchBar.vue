<template>
    <div class="search-wrapper">
        <input type="text" name="search" placeholder="Search.." 
        :style="{ backgroundImage: 'url(' + image + ')' }">
    </div>
</template>

<script>
    export default {
        name: 'AdvancedSearchBar',
        data: function () {
            return {image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TZWFyY2hJY29AM3g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iU2VhcmNoSWNvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIiBzdHJva2U9IiM1RDUzNTMiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iNCIgY3k9IjQiIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICA8cGF0aCBkPSJNNy40MjA2MDU2Nyw3LjA3MjI2MzQyIEM3LjE0MDIwMTg5LDcuMjc3NjQ2NSA3LDcuNTI5NzIzNjcgNyw3LjgyODQ5NDk5IEM3LDguMTI3MjY2MjYgNy4yMjU2MDczNyw4LjU5MDU5MTI4IDcuNjc2ODIyMSw5LjIxODQ2OTkgTDExLjM2OTc0NDMsMTMgTDEzLDExLjU3ODEwNDcgTDkuNDIxNzI3MzEsNy44Mjg0OTQ5OSBDOC45OTA0MjEzNCw3LjQyMDY5MTg0IDguNjQ3Mjg3MjQsNy4xNjg2MTQ2NiA4LjM5MjMyNDk0LDcuMDcyMjYzNDIgQzguMTM3MzYyNjMsNi45NzU5MTIxOSA3LjgxMzQ1NjIxLDYuOTc1OTEyMTkgNy40MjA2MDU2Nyw3LjA3MjI2MzQyIFoiIGlkPSJQYXRoLTIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='}
        }
    }
</script>

<style scoped>
    .search-wrapper {
        width: 100%;
    }
    input {
        width: 100%;
        padding: 4px 15px 4px 23px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
        background-position: 6px 6px;
        background-repeat: no-repeat;
    }
</style>