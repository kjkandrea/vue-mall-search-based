<template>
  <form @submit.prevent="onSubmit">
    <keyword-input :keyword.sync="query.keyword" />
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
import searchModel from "../../models/SearchModel";

@Component({
  components: { ProductFilter, KeywordInput },
})
export default class SearchController extends Vue {
  private query: SearchRequest = {
    keyword: "",
  };

  created(): void {
    const hasQuery = this.initQuery();
    if (hasQuery) this.search();
  }

  /**
   * @return default search query includes
   */
  private initQuery(): boolean {
    const queryBuffet = this.$route.query;
    const { keyword } = queryBuffet;
    if (!keyword) return false;
    this.query.keyword = keyword.toString();
    return true;
  }

  private onSubmit() {
    this.pushQuery();
    this.search();
  }

  private pushQuery(): void {
    const equal = isEqual(this.$route.query, this.query);

    if (equal) return;
    this.$router.push({
      query: this.query as Dictionary<string>,
    });
  }

  private async search() {
    const { data } = await searchModel.get(this.query);
    this.$emit("search:response", data);
  }
}
</script>
