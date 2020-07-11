<template>
  <div class="weatherLocation-component">
    <h5>My location:</h5>

    <p>{{ chosenLocation.toUpperCase() }}</p>
    <div v-if="changeLocation">
      <input v-model="location" @keyup.enter="changeLocationField" placeholder="Town..." />
      <br />
    </div>
    <div class="buttons">
      <button @click="changeLocationField">
        <i class="fas fa-pen"></i>
      </button>
      <button class="refresh" v-if="chosenLocation != ''" @click="getLongLat">
        <i class="fas fa-sync-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apiKey: String
  },
  data() {
    return {
      changeLocation: false,
      url: "http://api.openweathermap.org/data/2.5/weather?q=",
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
      console.log("ok");
      this.axios
        .get(`${this.url}${this.chosenLocation}${this.apiKey}`)
        .then(result => this.gottenData(result))
        .catch(err => console.error(err));
    },
    gottenData(result) {
      this.$emit("apiResult", { result: result });
    }
  }
};
</script>

<style></style>
