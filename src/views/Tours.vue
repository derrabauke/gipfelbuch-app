<template>
  <div class="Tours">
    <h2> Suche eine Route </h2>
    <TourList :tours="this.$store.state.tours"/>
  </div>
</template>

<script>
import TourList from '@/components/TourList.vue'

export default {
  name: 'tours',
  components: {
    TourList
  }
}
</script>