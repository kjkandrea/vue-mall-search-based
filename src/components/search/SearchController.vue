<template>
  <form @submit.prevent="onSubmit">
    <keyword-input :keyword.sync="searchQuery.keyword" />
    <product-filter />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import KeywordInput from "./formFields/KeywordInput.vue";
import ProductFilter from "./formFields/ProductFilter.vue";
import { isEqual } from "lodash";
import { SearchRequest } from "../../types";
import { Dictionary } from "vue-router/types/router";

@Component({
  components: { ProductFilter, KeywordInput },
})
export default class SearchController extends Vue {
  private searchQuery: SearchRequest = {
    keyword: "",
  };

  created(): void {
    this.initQuery();
  }

  private initQuery(): void {
    const queryBuffet = this.$route.query;
    const { keyword } = queryBuffet;
    if (!keyword) return;
    this.searchQuery.keyword = keyword.toString();
  }

  private onSubmit() {
    this.pushQuery();
  }

  private pushQuery(): void {
    const equal = isEqual(this.$route.query, this.searchQuery);

    if (equal) return;
    this.$router.push({
      query: this.searchQuery as Dictionary<string>,
    });
  }
}
</script>
