<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Weather
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
