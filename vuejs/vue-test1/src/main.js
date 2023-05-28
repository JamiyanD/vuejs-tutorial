import Vue from "vue";
import App from "./App.vue";
import Header from "./components/shared/Header.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
import Footer from "./components/shared/Footer.vue";

Vue.component("app-header", Header);
Vue.component("servers", Servers);
Vue.component("app-server-details", ServerDetails);
Vue.component("app-footer", Footer);

new Vue({
  el: "#app",
  render: h => h(App)
});
