<template>
  <div>
    <check-buttons v-for="(filter, idx) in data" :key="idx" :data="filter" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CheckButtons from "../../common/inputs/CheckButtons.vue";
import { Filter } from "../../../types";

@Component({
  components: { CheckButtons },
})
export default class ProductFilter extends Vue {
  @Prop({ required: true })
  private readonly data!: Filter[];
}
</script>

<style scoped>
div {
  margin-top: 5px;
}
</style>
