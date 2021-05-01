<template>
  <div>
    <input type="text" maxlength="50" />
    <button type="submit">submit</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class KeywordInput extends Vue {}
</script>
