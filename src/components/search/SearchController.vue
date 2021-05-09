<template>
  <form @submit.prevent="onSubmitQuery">
    <keyword-input :keyword.sync="query.keyword" />
    <product-filter />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import KeywordInput from "./formFields/KeywordInput.vue";
import ProductFilter from "./formFields/ProductFilter.vue";
import { SearchRequest } from "../../types";
@Component({
  components: { ProductFilter, KeywordInput },
})
export default class SearchController extends Vue {
  private query: SearchRequest = {
    keyword: "",
  };

  private onSubmitQuery() {
    console.log(this.query);
  }
}
</script>
