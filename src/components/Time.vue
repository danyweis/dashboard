<template>
  <div class="time-component">
    <h2>{{ currentTime }}</h2>
    <p>{{ currenDate }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: null,
      currenDate: null
    };
  },
  methods: {
    showTime() {
      let time = new Date();
      this.currentTime = time.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
      });
      this.currenDate = time.toLocaleDateString();
    }
  },
  created() {
    this.interval = setInterval(() => this.showTime(), 1000);
  }
};
</script>

<style>
</style>