<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <label>Eshlel</label>
    <app-new-quote @quoteAdded="NewQuote"></app-new-quote>
    <app-quote-grid
      :quotes="quotes"
      @quoteDelete="deleteQuote"
    ></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Eshlel deer darj ustgana uu</div>
      </div>
    </div>
  </div>
</template>

<script>
import NewQuote from "./components/NewQuote.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import Header from "./components/Header.vue";
export default {
  data: function () {
    return {
      quotes: ["Ene bol shuleg"],
      maxQuotes: 10,
    };
  },
  methods: {
    NewQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert(
          "Eshleluudees ustgana uu? Zovshoorogdson hamgiin ih utgaas hetersen bna"
        );
      }
      this.quotes.unshift(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    },
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header,
  },
};
</script>

<style >
</style>
