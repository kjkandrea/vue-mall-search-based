<template>
  <div>
    <label :class="{ checked: value }">
      <span>항목1</span>
      <input type="checkbox" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CheckButton extends Vue {
  private readonly value = false;
}
</script>

<style scoped>
label {
  display: inline-block;
  margin-right: 1rem;
  cursor: pointer;
}

input {
  width: 0;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

label.checked {
  color: #6789ec;
}
</style>
