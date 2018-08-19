<template>
  <div id="app">
    <header>
      <div id="header"><span>Gipfelbuch</span></div>
    </header>
    <div id="nav">
      <router-link to="/">Suche</router-link> |
      <router-link to="/history">Profil</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
</style>
