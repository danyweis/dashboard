<template>
  <div v-if="apiAnswer !== null" class="weatherHours-component">
    <div v-for="(forcast, index) in apiAnswer.hourly.slice(0,12)" :key="index" class="hrsBox">
      <p>{{convTime(forcast.dt)}}:00</p>
      <!-- <div class="tempIcon"> -->
      <img :src="pngLink + forcast.weather[0].icon + pngSize" alt />
      <p>{{Math.round(forcast.temp)}}&deg;</p>
      <!-- </div> -->
      <!-- <p>{{forcast.weather[0].description}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apiAnswer: Object
  },
  data() {
    return {
      pngLink: "http://openweathermap.org/img/wn/",
      pngSize: ".png"
    };
  },
  methods: {
    convTime(dt) {
      let time = new Date(dt * 1000);
      return time.getHours();
    }
  }
};
</script>

<style>
.weatherHours-component {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.hrsBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tempIcon {
  display: flex;
  align-items: center;
}
</style>