import Vue from "vue";
import App from "./components/App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ...App
}).$mount("#app");
