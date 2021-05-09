<template>
  <div>
    <input type="text" maxlength="50" v-model="keywordSync" />
    <button type="submit">검색</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from "vue-property-decorator";

@Component
export default class KeywordInput extends Vue {
  @PropSync("keyword", { required: true })
  private readonly keywordSync!: string;
}
</script>

<style scoped>
input {
  width: calc(100% - 100px);
}

button {
  width: 95px;
  margin-left: 5px;
}
</style>
