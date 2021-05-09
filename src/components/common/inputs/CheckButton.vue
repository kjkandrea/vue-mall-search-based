<template>
  <div>
    <label
      v-for="option in data"
      :key="option"
      :class="{
        checked: selectedValues.includes(option),
        focus: option === focusedValue,
      }"
    >
      <span>{{ option }}</span>
      <input
        type="checkbox"
        :value="option"
        v-model="selectedValues"
        @change="$emit('check', selectedValues)"
        @focus="onFocus(option)"
        @focusout="onFocusOut()"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from "vue-property-decorator";

@Component
export default class CheckButton extends Vue {
  @Model("check")
  private readonly value!: string[];
  @Prop({ required: true })
  private readonly data!: string[];

  private selectedValues: string[] = [];
  private focusedValue = "";

  private onFocus(value: string) {
    this.$nextTick(() => {
      this.focusedValue = value;
    });
  }

  private onFocusOut() {
    this.focusedValue = "";
  }
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
