<template>
  <div class="weather-component">
    <Location />
    <WeatherHours />
    <Time />
  </div>
</template>

<script>
import Time from "./Time.vue";
import Location from "./Location.vue";
import WeatherHours from "./WeatherHours.vue";
export default {
  components: {
    Time,
    Location,
    WeatherHours
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>