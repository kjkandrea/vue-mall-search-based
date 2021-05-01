<template>
  <search-layout>
    <template v-slot:header>
      <search-controller />
    </template>
    <template v-slot:contents>
      <search-result />
    </template>
  </search-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchLayout from "../components/layouts/SearchLayout.vue";
import SearchController from "../components/search/SearchController.vue";
import SearchResult from "../components/search/SearchResult.vue";

@Component({
  components: {
    SearchResult,
    SearchController,
    SearchLayout,
  },
})
export default class Home extends Vue {}
</script>
