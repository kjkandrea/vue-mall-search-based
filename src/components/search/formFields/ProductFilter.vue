<template>
  <div v-if="data.length > 0">
    <check-buttons
      v-for="(item, idx) in data"
      :key="idx"
      :data="item"
      v-model="filterSync[item.name]"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Watch } from "vue-property-decorator";
import CheckButtons from "../../common/inputs/CheckButtons.vue";
import { Filter } from "../../../types";

@Component({
  components: { CheckButtons },
})
export default class ProductFilter extends Vue {
  @Prop({ required: true })
  private readonly data!: Filter[];
  @PropSync("filter", { required: true })
  private filterSync!: { [key: string]: string };

  @Watch("data")
  changedData(value: Filter[]): void {
    if (value.length > 0) this.initFilter();
    this.$forceUpdate();
  }

  private initFilter() {
    Object.assign(
      this.filterSync,
      ...this.data.map(({ name }) => ({ [name]: [] }))
    );
  }
}
</script>

<style scoped>
div {
  margin-top: 5px;
}
</style>
