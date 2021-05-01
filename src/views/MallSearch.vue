<template>
  <search-layout>
    <template v-slot:header>
      <h1>search area</h1>
    </template>
    <template v-slot:contents>
      <h1>result area</h1>
    </template>
  </search-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchLayout from "../components/layouts/SearchLayout.vue"; // @ is an alias to /src

@Component({
  components: {
    SearchLayout,
  },
})
export default class Home extends Vue {}
</script>
