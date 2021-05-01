<template>
  <div>
    <check-buttons />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CheckButtons from "../../common/inputs/CheckButtons.vue";
@Component({
  components: { CheckButtons },
})
export default class ProductFilter extends Vue {}
</script>

<style scoped>
div {
  margin-top: 5px;
}
</style>
