<template>
  <div class="weather-component">
    <Location />
    <div>weather</div>
    <Time />
  </div>
</template>

<script>
import Time from "./Time.vue";
import Location from "./Location.vue";
export default {
  components: {
    Time,
    Location
  }
};
</script>

<style>
</style>