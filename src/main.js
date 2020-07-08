import Vue from "vue";
// after npm install use this.axios almost like fetch
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import store from "./store";

import "./assets/sass/index.sass";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
