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

@Component({
  components: { ProductFilter, KeywordInput },
})
export default class SearchController extends Vue {
  private query = {
    keyword: "",
  };

  private onSubmit() {
    this.pushQuery();
  }

  private pushQuery(): void {
    const equal = isEqual(this.$route.query, this.query);

    if (equal) return;
    this.$router.push({
      query: this.query,
    });
  }
}
</script>
