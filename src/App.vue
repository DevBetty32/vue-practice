<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/htmlbinding">Html Binding</router-link> |
    <router-link to="/input">Input Binding</router-link> |
    <router-link to="/inputnumber">Input Number</router-link> |
    <router-link to="/listbinding">List Binding</router-link> |
    <router-link to="/event">Event</router-link> |
    <br>
    <router-link to="/compTest">compTest</router-link> |
    <router-link to="/parentComp">parentComp</router-link> |
    <router-link to="/useslotmodal">useSlotModal</router-link> |
    <router-link to="/provideinject">provideInject</router-link> |
    <router-link to="/cube">cube</router-link> |
    <router-link to="/cubeCompositionAPI">cubeCompositionAPI</router-link>|
    <router-link to="/CompositionAPIProvide">CompositionAPIProvide</router-link>|
    <router-link to="/GridView">GridView</router-link>|
    <router-link to="/ElPractice">ElPractice</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
