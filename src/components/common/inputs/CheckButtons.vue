<template>
  <dl>
    <dt>title</dt>
    <dd>
      <check-button />
    </dd>
  </dl>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CheckButton from "./CheckButton.vue";
@Component({
  components: { CheckButton },
})
export default class CheckButtons extends Vue {}
</script>
