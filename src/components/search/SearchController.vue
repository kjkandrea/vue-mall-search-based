<template>
  <form @submit.prevent="onSubmitQuery">
    <keyword-input />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import KeywordInput from "./searchForm/KeywordInput.vue";
@Component({
  components: { KeywordInput },
})
export default class SearchController extends Vue {
  private onSubmitQuery() {
    console.log("submit");
  }
}
</script>
