<template>
  <div>
    <label :class="{ checked: value, focus: focus }">
      <span>항목1</span>
      <input
        type="checkbox"
        v-model="value"
        @focus="focus = true"
        @focusout="focus = false"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CheckButton extends Vue {
  private readonly value = false;
  private focus = false;
}
</script>

<style scoped>
label {
  display: inline-block;
  margin-right: 1rem;
  cursor: pointer;
}

input {
  overflow: hidden;
  width: 0;
  height: 0;
  opacity: 0;
  font-size: 0;
}

label.checked {
  color: #6789ec;
}

label.focus {
  text-decoration: underline;
}
</style>
