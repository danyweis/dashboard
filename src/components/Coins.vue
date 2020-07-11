<template>
  <div v-if="coins" class="coins-component">
    <p>Top 5 coins by Marketcap:</p>
    <div v-for="coin in coinData" :key="coin.id" class="coinList">
      <div class="coinContent">
        <img :src="coin.image" :alt="coin.name" class="coinImage" />
        <p>{{ coin.name }}:</p>
        <p>{{ coin.current_price }}$</p>
        <p>{{Math.round(coin.price_change_percentage_24h * 100) / 100}}%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coinsUrl:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false",
      coins: false,
      coinData: null
    };
  },
  methods: {
    callCoins(theCoins) {
      this.coinData = theCoins.data;
      console.log(theCoins);
      this.coins = true;
    },
    firstCall() {
      this.axios
        .get(this.coinsUrl)
        .then(resp => this.callCoins(resp))
        .catch(err => console.error(err));
    }
  },
  beforeMount() {
    this.firstCall();
    this.interval = setInterval(() => this.firstCall(), 60000);
  }
};
</script>

<style>
.coinImage {
  height: 18px;
}
</style>