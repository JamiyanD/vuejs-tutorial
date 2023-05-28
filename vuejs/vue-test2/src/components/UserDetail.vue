<template>
  <div>
    <p>Many Details</p>
    <p>Hereglegchiin ner: {{ switchName() }}</p>
    <p>User age : {{ userAge }}</p>
    <button @click="resetFn()">Ner dahin tohiruulah</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    myName: {
      type: String,
      default: "Tsogoo",
    },
    resetFn: Function,
    userAge: Number,
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse("").join("");
    },
    resetName() {
      this.myName = "Zolboo";
      //   this.$emit("nameWasReset", this.myName);
    },
  },
  created() {
    eventBus.$on("ageWasEdited", (age) => {
      this.userAge = age;
    });
  },
};
</script>