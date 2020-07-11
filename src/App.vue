<template>
  <div id="app">
    <Weather />
    <Time />
    <Coins />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Weather from "./components/Weather.vue";
import Time from "./components/Time.vue";
import Coins from "./components/Coins.vue";
export default {
  name: "App",
  components: {
    Weather,
    Time,
    Coins
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
