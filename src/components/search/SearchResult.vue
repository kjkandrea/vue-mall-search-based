<template>
  <div class="result">
    <div v-if="data.length > 0" />
    <div v-else class="no-result">
      <p><strong>검색결과</strong>가 없습니다.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SearchResult extends Vue {
  private readonly data = [];
}
</script>

<style>
.no-result {
  padding: 3rem;
  margin-top: 10px;
  border: 1px dashed #ddd;
}
</style>
