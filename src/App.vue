<template>
  <div id="app">
    <header>
      <div id="header"><span>Gipfelbuch</span></div>
    </header>
    <div id="nav">
      <router-link to="/">Suche</router-link> |
      <router-link to="/history">Profil</router-link>
    </div>
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import TourList from './components/TourList.vue';

export default {
  name: 'app',
  components: {TourList},
  created () {
    this.$store.commit("getTours")
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  height: 150px;
  background-color: #7C8861;
  font-family: Futura;
  font-size: 4em;
  color: white;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.router-anim-enter-active {
  animation: coming .5s;
  animation-delay: 0.3s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
