<template>
  <div>
    <h1>New Component</h1>
    <button @click="counter++">Nemeh</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0,
    };
  },
  created() {
    console.log("new vue instance uuslee");
  },

  deactivated() {
    console.log("new vue instance idevhgui bolloo");
  },
  activated() {
    console.log("new vue instance idevjilee");
  },
  destroyed() {
    console.log("new vue instace ustlaa");
  },
};
</script>

<style>
</style>