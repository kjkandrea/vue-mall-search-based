<template>
  <form @submit.prevent="onSubmit">
    <keyword-input :keyword.sync="query.keyword" />
    <product-filter
      :filter.sync="query.filters"
      :data="filter"
      @change:query="onSubmit"
    />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import KeywordInput from "./formFields/KeywordInput.vue";
import ProductFilter from "./formFields/ProductFilter.vue";
import { isEqual } from "lodash";
import { Filter, SearchRequest } from "../../types";
import searchModel from "../../models/SearchModel";
import filterModel from "../../models/FilterModel";

@Component({
  components: { ProductFilter, KeywordInput },
})
export default class SearchController extends Vue {
  private query: SearchRequest = {
    keyword: "",
    filters: {},
  };

  private filter: Filter[] = [];

  created(): void {
    const hasQuery = this.initQuery();
    if (hasQuery) {
      this.searchProduct();
      this.searchFilter();
    }
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
    this.searchProduct();
    this.searchFilter();
  }

  private pushQuery(): void {
    const equal = isEqual(this.$route.query, this.query);

    if (equal) return;
    console.log(this.query.filters);
    this.$router.push({
      query: {
        keyword: this.query.keyword,
        ...this.query.filters,
      },
    });
  }

  private async searchProduct() {
    const { data } = await searchModel.get(this.query);
    this.$emit("search:response", data);
  }

  private async searchFilter() {
    const { keyword } = this.query;
    if (keyword === undefined) return;
    const { data } = await filterModel.get({ keyword });
    this.filter = data;
  }
}
</script>
