<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Hashilt</button>
        <button @click="selectedComponent = 'appAuthor'">Zohiogch</button>
        <button @click="selectedComponent = 'appNew'">Shine</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <hr />
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
        <!-- <app-quote quote="Gaihamshigt hashilt...">
          <h2 slot="title">{{ quoteTitle }}</h2>
          <small>Hello hashilt</small>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data: function () {
    return {
      quoteTitle: "Gaihamshigt hashilt",
      selectedComponent: "appQuote",
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  },
};
</script>

<style lang="scss">
</style>
