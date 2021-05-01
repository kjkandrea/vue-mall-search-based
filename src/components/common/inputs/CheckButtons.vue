<template>
  <dl>
    <dt>조건</dt>
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
</style>
