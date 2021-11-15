<template>
  <div id="app">
    <Nav/>
    <SideBar/>
    <Location/>
  </div>
</template>

<script>
import SideBar from "./Sidebar";
import Nav from "./Nav";
import Location from "./Location";

export default {
  name: 'App',
  components: {
    SideBar,
    Nav,
    Location
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
