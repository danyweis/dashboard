<template>
  <div>
    <h2>My location</h2>
    <p>52.14627 -7.84274</p>
    <p>{{latitude}} and {{longitude}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: 0,
      longitude: 0
    };
  },
  methods: {
    success(position) {
      let currentPos = position.coords;
      console.log(currentPos);
      this.latitude = currentPos.latitude;
      this.longitude = currentPos.longitude;
    },
    error(err) {
      console.error(`The Error: ${err}`);
    }
  },
  created() {
    navigator.geolocation.getCurrentPosition(this.success, this.error, {
      timeout: 5000
    });
  }
};
</script>

<style>
</style>