<template>
  <div class="weather-component">
    <Location @apiResult="getLongLatResult" :apiKey="apiKey" />
    <WeatherHours :apiAnswer="apiAnswer" />
  </div>
</template>

<script>
import Location from "./Location.vue";
import WeatherHours from "./WeatherHours.vue";
export default {
  components: {
    Location,
    WeatherHours
  },
  data() {
    return {
      apiUrl: "https://api.openweathermap.org/data/2.5/onecall?lat=",
      longi: "&lon=",
      exclude: "&exclude=current,minutely,daily&units=metric",
      apiKey: "&appid=",
      townData: "",
      lat: "",
      long: "",
      apiAnswer: null,
      myTimeout: ""
    };
  },
  methods: {
    getLongLatResult(payload) {
      this.townData = payload.result;
      this.long = this.townData.data.coord.lon;
      this.lat = this.townData.data.coord.lat;
      this.getHrsData();
    },
    getHrsData() {
      this.axios
        .get(
          `${this.apiUrl}${this.lat}${this.longi}${this.long}${this.exclude}${this.apiKey}`
        )
        .then(result => this.gottenWeather(result))
        .catch(err => console.error(err));
    },
    gottenWeather(gottenData) {
      this.apiAnswer = gottenData.data;
    }
  }
};
</script>

<style>
</style>