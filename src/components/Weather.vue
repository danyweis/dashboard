<template>
  <div class="weather-component">
    <Location @apiResult="test" />
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
    return {
      townData: ""
    };
  },
  methods: {
    test(payload) {
      this.townData = payload.result;
      console.log("yes");
      console.log(this.townData.data.coord.lon);
      console.log(this.townData.data.coord.lat);
    }
  }
};
</script>

<style>
</style>