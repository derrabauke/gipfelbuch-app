<template>
  <div class="tours">
    <AdvancedSearchBar/>
    <TourList/>
  </div>
</template>

<script>
  import TourList from '@/components/TourList.vue'
  import AdvancedSearchBar from '@/components/AdvancedSearchBar.vue'

  export default {
    name: 'Tours',
    components: {
      TourList,
      AdvancedSearchBar
    }
}
</script>
<style scoped lang="scss">
  .tours{
    width: 90vw;
    max-width: 400px;
    margin: 0 auto;
  }
</style>
