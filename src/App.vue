<template>
  <div id="app">
    <header>
      <div id="header">
        <span id="username">Falk´s</span><span id="title">Gipfelbuch</span>
      </div>
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
    components: {TourList}
  }
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-black;
}

header {
  height: 6.5em;
  background-color: $dark-green;
  #header {
    padding-top: 2em;
  }
  #username {
    font-family: Nanum Brush Script, Comic Sans, Arial, sans-serif;
    font-size: 2.4em;
    color: black;
    background-color: $header-orange;
    padding: 0 0.3em;
    margin-right: 0.2em;
    white-space: nowrap;
  }
  #title {
    font-family: Futura, Helvetica, Arial, sans-serif;
    font-size: 3em;
    color: white;
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $font-black;
    &.router-link-exact-active {
      color: $light-green;
    }
  }
}

.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.3s;
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