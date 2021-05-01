<template>
  <form @submit.prevent="onSubmitQuery">
    <keyword-input />
    <product-filter />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import KeywordInput from "./formFields/KeywordInput.vue";
import ProductFilter from "./formFields/ProductFilter.vue";
@Component({
  components: { ProductFilter, KeywordInput },
})
export default class SearchController extends Vue {
  private onSubmitQuery() {
    console.log("submit");
  }
}
</script>
