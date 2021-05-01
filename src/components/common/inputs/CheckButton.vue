<template>
  <div>
    <label :for="uid">label</label>
    <input type="checkbox" :id="uid" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CheckButton extends Vue {
  private readonly uid = "check-uid";
}
</script>
