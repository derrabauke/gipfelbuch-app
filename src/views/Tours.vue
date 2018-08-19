<template>
  <div class="tours">
    <AdvancedSearchBar/>
    <TourList :tours="this.$store.state.tours"/>
  </div>
</template>

<script>
import TourList from '@/components/TourList.vue'
import AdvancedSearchBar from '@/components/AdvancedSearchBar.vue'

export default {
  name: 'tours',
  components: {
    TourList,
    AdvancedSearchBar
  }
}
</script>
<style scoped>
  .tours{
    width: 90vw;
    max-width: 400px;
    padding-left: 5%;
    margin: 0 auto;
  }
</style>
