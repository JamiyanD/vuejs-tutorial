import Vue from "vue";
import App from "./App.vue";
import User from "./components/User.vue";
import UserDetail from "./components/UserDetail.vue";

Vue.component("user", User);
// Vue.component("user-detail", UserDetail);
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
