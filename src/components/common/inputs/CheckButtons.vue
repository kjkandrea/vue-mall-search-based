<template>
  <dl>
    <dt>{{ data.title }}</dt>
    <dd>
      <label
        v-for="option in data.options"
        :key="option"
        :class="{
          checked: selectedValues && selectedValues.includes(option),
          focus: option === focusedValue,
        }"
      >
        <span>{{ option }}</span>
        <input
          type="checkbox"
          :value="option"
          v-model="selectedValues"
          @change="onChecked"
          @focus="onFocus(option)"
          @focusout="onFocusOut()"
        />
      </label>
    </dd>
  </dl>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
import { Filter } from "../../../types/model";
@Component
export default class CheckButtons extends Vue {
  @Model("check")
  private readonly value!: string[];
  @Prop({ required: true })
  private readonly data!: Filter;
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

  private onChecked() {
    this.$emit("check", this.selectedValues);
  }

  public initDefaultValue(): void {
    this.selectedValues = this.value;
  }
}
</script>

<style scoped>
dl {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0.5rem 0;
  font-size: 0.875rem;
}

dt {
  width: 60px;
  font-weight: 600;
}

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
