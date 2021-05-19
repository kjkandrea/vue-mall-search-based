<template>
  <main>
    <header class="header">
      <slot name="header" />
    </header>
    <div class="contents">
      <slot name="contents" />
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SearchLayout extends Vue {}
</script>
