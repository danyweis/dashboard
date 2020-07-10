<template>
  <div>
    <h3>My location:</h3>

    <h2>{{ chosenLocation }}</h2>
    <div v-if="changeLocation">
      <input v-model="location" @keyup.enter="changeLocationField" />
      <br />
    </div>
    <button @click="changeLocationField">
      Edit Location
      <i class="fas fa-pen"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeLocation: false,
      url: "http://api.openweathermap.org/data/2.5/weather?q=",
      // key: "&appid={your api key}",
      key: "&appid=87ed9a66fdb379ba08f553e8d288eb52",
      location: "",
      chosenLocation: ""
    };
  },
  methods: {
    changeLocationField() {
      this.changeLocation = !this.changeLocation;
      this.chosenLocation = this.location;
      this.location = "";
      if (!this.changeLocation) {
        this.getLongLat();
      }
    },
    getLongLat() {
      this.axios
        .get(`${this.url}${this.chosenLocation}${this.key}`)
        // .then((response) => response.json())
        .then(result => this.gottenData(result));
      // .catch(err => console.error(err));
    },
    gottenData(result) {
      this.$emit("apiResult", { result: result });
    }
  }
};
</script>

<style></style>
