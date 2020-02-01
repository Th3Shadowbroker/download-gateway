import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App";

Vue.config.productionTip = false;

new Vue({
   vuetify,
   template: "<App/>",
   components: {App}
}).$mount("#app");
